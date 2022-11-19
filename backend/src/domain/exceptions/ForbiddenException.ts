import { ErrorInterface, ExceptionInterface } from '@models/error.model';

export default class ForbiddenException extends Error implements ExceptionInterface {
    public error: ErrorInterface;

    constructor(message: string) {
        super('Forbidden');
        this.error = {
            status: 403,
            messages: [
                {
                    message,
                },
            ],
        };
    }
}
