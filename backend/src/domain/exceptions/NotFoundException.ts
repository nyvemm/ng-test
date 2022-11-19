import { ErrorInterface, ExceptionInterface } from '@models/error.model';

export default class NotFoundException extends Error implements ExceptionInterface {
    public error: ErrorInterface;

    constructor(message: string) {
        super('Entity not found');
        this.error = {
            status: 404,
            messages: [
                {
                    message,
                },
            ],
        };
    }
}
