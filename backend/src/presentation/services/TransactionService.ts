import Database from '@db/database';
import ForbiddenException from '@exceptions/ForbiddenException';
import { ListTransactionsResponseModel } from '@models/transaction.model';
import { UserService } from '@services/UserService';

export default class TransactionService {
    static async createTransaction(debitedAccountId: number, creditedAccountId: number, value: number): Promise<void> {
        /* Verify if the target user is the same as the logged user */
        if (debitedAccountId === creditedAccountId) {
            throw new ForbiddenException('Você não pode transferir para a sua própria conta.');
        }

        /* Verify if the user is trying to transfer a negative value */
        if (value <= 0) {
            throw new ForbiddenException('O valor da transferência deve ser maior que zero.');
        }

        const enoughBalance = await Database('accounts').where({ id: debitedAccountId }).andWhere('balance', '>=', value).first();

        /* Verify if user has enough balance */
        if (enoughBalance === undefined) {
            throw new ForbiddenException('Saldo insuficiente.');
        }

        /* Create transaction */
        await Database('transactions').insert({
            debitedAccountId,
            creditedAccountId,
            value,
        });

        /* Update the debited account balance */
        await Database('accounts').where({ id: debitedAccountId }).decrement('balance', value);

        /* Update the credited account balance */
        await Database('accounts').where({ id: creditedAccountId }).increment('balance', value);
    }

    static async listTransactions(
        token: string,
        limit: number,
        page: number,
        startDate?: string,
        endDate?: string,
        type?: 'cash-in' | 'cash-out'
    ): Promise<ListTransactionsResponseModel> {
        const user = await UserService.getUserByToken(token);

        let query = Database('transactions')
            .innerJoin('accounts as debited', 'transactions.debitedAccountId', 'debited.id')
            .innerJoin('accounts as credited', 'transactions.creditedAccountId', 'credited.id')
            .innerJoin('users as debitedUser', 'debited.id', 'debitedUser.accountId')
            .innerJoin('users as creditedUser', 'credited.id', 'creditedUser.accountId')
            .where((builder) => {
                builder.orWhere('debitedUser.id', user.id).orWhere('creditedUser.id', user.id);
            });

        /* If the user is searching for a specific date range */
        if (startDate && endDate) {
            query = query.whereBetween('transactions.createdAt', [startDate, endDate]);
        } else if (startDate) {
            query = query.where('transactions.createdAt', '>=', startDate);
        }

        /* If the user is searching for a specific type */
        if (type === 'cash-in') {
            query = query.where('creditedUser.id', user.id);
        } else if (type === 'cash-out') {
            query = query.where('debitedUser.id', user.id);
        }

        return <ListTransactionsResponseModel>await query
            .orderBy('transactions.createdAt', 'desc')
            .limit(limit)
            .offset((page - 1) * limit)
            .select({
                id: 'transactions.id',
                debitedAccountId: 'debited.id',
                debitedAccountUsername: 'debitedUser.username',
                creditedAccountId: 'credited.id',
                creditedAccountUsername: 'creditedUser.username',
                value: 'transactions.value',
                createdAt: 'transactions.createdAt',
            });
    }
}
