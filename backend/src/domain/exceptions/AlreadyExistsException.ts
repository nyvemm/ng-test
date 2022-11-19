import { ErrorInterface, ExceptionInterface } from '@models/error.model';

export default class AlreadyExistsException extends Error implements ExceptionInterface {
    public error: ErrorInterface;

    constructor(message: string) {
        super('Entity already exists');
        this.error = {
            status: 409,
            messages: [
                {
                    message,
                },
            ],
        };
    }
}
