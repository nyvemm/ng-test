import { Response } from 'express';
import { ExceptionInterface } from '@models/error.model';

export default class ExceptionService {
    public static handle(res: Response, error: ExceptionInterface, logger?: unknown): void {
        if (logger) {
            console.log(logger);
        }
        res.status(error?.error?.status || 500).json(
            error?.error || {
                status: 500,
                messages: [
                    {
                        message: 'Erro interno do servidor',
                    },
                ],
            }
        );
    }
}
