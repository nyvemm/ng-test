import { NextFunction, Request, Response } from 'express';
import { UserService } from '@services/UserService';
import ExceptionService from '@services/ExceptionService';
import UnauthorizedException from '@exceptions/UnauthorizedException';

export const Auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { authorization } = req.headers;
    const isValidToken = await UserService.validateToken(authorization || '');

    if (isValidToken) {
        next();
    } else {
        res.clearCookie('Authorization');
        ExceptionService.handle(res, new UnauthorizedException('Token inválido'));
    }
};
