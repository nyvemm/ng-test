import express from 'express';
import ExceptionService from '@services/ExceptionService';
import InternalServerException from '@exceptions/InternalServerException';
import AccountService from '@services/AccountService';
import { UserService } from '@services/UserService';
import UnauthorizedException from '@exceptions/UnauthorizedException';

export default class AccountController {
    static async balance(req: express.Request, res: express.Response): Promise<void> {
        try {
            const user = await UserService.getUserByToken(req?.headers?.authorization || '');

            if (!user) {
                ExceptionService.handle(res, new UnauthorizedException('Token inválido'));
                return;
            }

            const balance = await AccountService.balance(user?.id);

            res.status(200).json(balance);
        } catch (error) {
            ExceptionService.handle(res, new InternalServerException(), error);
        }
    }
}
