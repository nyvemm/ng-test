import Joi from 'joi';
import { ErrorInterface, ExceptionInterface } from '@models/error.model';
import { JoiToExceptionHelper } from '@helpers/JOIToExceptionHelper';

export default class BadRequestException extends Error implements ExceptionInterface {
    public error: ErrorInterface;

    constructor(validation: Joi.ValidationResult) {
        super('Bad Request');
        this.error = {
            status: 400,
            messages: JoiToExceptionHelper(validation),
        };
    }
}
