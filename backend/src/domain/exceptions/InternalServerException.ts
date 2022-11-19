import { ErrorInterface, ExceptionInterface } from '@models/error.model';

export default class InternalServerException extends Error implements ExceptionInterface {
    public error: ErrorInterface;

    constructor(message?: string) {
        super('Internal Server Error');
        this.error = {
            status: 500,
            messages: [
                {
                    message: message || 'Erro interno do servidor',
                },
            ],
        };
    }
}
