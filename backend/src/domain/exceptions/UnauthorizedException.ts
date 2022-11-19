import { ErrorInterface, ExceptionInterface } from '@models/error.model';

export default class UnauthorizedException extends Error implements ExceptionInterface {
    public error: ErrorInterface;

    constructor(message: string) {
        super('Unauthorized');
        this.error = {
            status: 401,
            messages: [
                {
                    message,
                },
            ],
        };
    }
}
