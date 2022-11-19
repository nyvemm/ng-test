import express from 'express';
import ExceptionService from '@services/ExceptionService';
import InternalServerException from '@exceptions/InternalServerException';
import { HofSchemaValidator } from '@validators/JoiValidator';
import { CustomRequest } from '@models/requests.model';
import { CreateTransactionRequestModel } from '@models/transaction.model';
import { CreateTransactionSchema, ListTransactionsSchema } from '@validators/schemas/TransactionValidator';
import BadRequestException from '@exceptions/BadRequestException';
import { UserService } from '@services/UserService';
import NotFoundException from '@exceptions/NotFoundException';
import TransactionService from '@services/TransactionService';
import ForbiddenException from '@exceptions/ForbiddenException';
import UnauthorizedException from '@exceptions/UnauthorizedException';

export default class TransactionController {
    static async createTransactions(req: CustomRequest<CreateTransactionRequestModel>, res: express.Response): Promise<void> {
        try {
            const { value, creditedAccountUsername } = req.body;
            const validation = HofSchemaValidator(CreateTransactionSchema, req.body);

            /* Checking if the body payload is valid */
            if (validation.error) {
                ExceptionService.handle(res, new BadRequestException(validation));
                return;
            }

            const myUser = await UserService.getUserByToken(req?.headers?.authorization || '');
            const targetUser = await UserService.getUserByUsername(creditedAccountUsername);

            if (!myUser) {
                ExceptionService.handle(res, new UnauthorizedException('Token inválido'));
                return;
            }

            /* Verify if the target user exists */
            if (targetUser === undefined) {
                ExceptionService.handle(res, new NotFoundException('Usuário não encontrado'));
                return;
            }

            try {
                const transaction = await TransactionService.createTransaction(myUser.accountId, targetUser.accountId, value);
                res.status(201).json(transaction);
            } catch (error) {
                if (error instanceof ForbiddenException) {
                    ExceptionService.handle(res, error);
                } else {
                    ExceptionService.handle(res, new InternalServerException(), error);
                }
            }
        } catch (error) {
            ExceptionService.handle(res, new InternalServerException(), error);
        }
    }

    static async listTransactions(req: express.Request, res: express.Response): Promise<void> {
        const validation = HofSchemaValidator(ListTransactionsSchema, req.query);

        /* Checking if the query params is valid */
        if (validation.error) {
            ExceptionService.handle(res, new BadRequestException(validation));
            return;
        }

        try {
            const token = req?.headers?.authorization || '';
            const page = parseInt((req.query.page as string) || '1', 10);
            const limit = parseInt((req.query.limit as string) || '50', 10);
            const startDate = req.query.startDate as string;
            const endDate = req.query.endDate as string;
            const type = req.query.type as 'cash-in' | 'cash-out' | undefined;

            const transactions = await TransactionService.listTransactions(token, limit || 50, page || 1, startDate, endDate, type);

            res.status(200).json(transactions);
        } catch (error) {
            ExceptionService.handle(res, new InternalServerException(), error);
        }
    }
}
