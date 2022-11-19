import Joi from 'joi';

export const PaginationSchema = {
    page: Joi.number().messages({
        'number.base': 'O campo página deve ser um número.',
    }),
    limit: Joi.number().messages({
        'number.base': 'O campo limite deve ser um número.',
    }),
};
