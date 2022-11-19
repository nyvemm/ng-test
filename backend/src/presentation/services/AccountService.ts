import Database from '@db/database';
import { BalanceResponseModel } from '@models/account.model';

export default class AccountService {
    static async balance(userId: number): Promise<BalanceResponseModel> {
        return Database('users')
            .innerJoin('accounts', 'users.accountId', 'accounts.id')
            .where({ 'users.id': userId })
            .select({
                userId: 'users.id',
                accountId: 'accounts.id',
                username: 'users.username',
                balance: 'accounts.balance',
            })
            .first();
    }
}
