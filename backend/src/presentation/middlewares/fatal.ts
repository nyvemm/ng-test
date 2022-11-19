import ExceptionService from '@services/ExceptionService';
import { NextFunction, Request, Response } from 'express';
import InternalServerException from '@exceptions/InternalServerException';

export default (error: Error, req: Request, res: Response, next: NextFunction): void => {
    if (error) {
        ExceptionService.handle(res, new InternalServerException(error.message), error);
    } else {
        next();
    }
};
