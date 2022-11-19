import Joi from 'joi';
import { MessageInterface } from '@models/error.model';

const ignoreTypes = ['object.unknown', 'any.required'];

export const JoiToExceptionHelper = (validation: Joi.ValidationResult): MessageInterface[] => {
    return (
        validation?.error?.details.map((error) => {
            return {
                field: error.context?.key,
                message: error.message,
            };
        }) || []
    );
};
