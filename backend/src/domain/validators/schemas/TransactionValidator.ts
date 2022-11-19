import Joi from 'joi';
import { PaginationSchema } from '@validators/schemas/PaginationValidator';

export const TransactionSchema = {
    creditedAccountUsername: Joi.string().required().messages({
        'string.base': 'O campo "creditedAccountUsername" deve ser do tipo string.',
        'string.empty': 'O campo "creditedAccountUsername" não pode ser vazio.',
        'any.required': 'O campo "creditedAccountUsername" é obrigatório.',
    }),
    value: Joi.number().required().messages({
        'any.required': 'O campo valor é obrigatório.',
        'number.base': 'O campo valor deve ser um número.',
    }),
};

export const CreateTransactionSchema = Joi.object({
    ...TransactionSchema,
}).unknown(true);

export const ListTransactionsSchema = Joi.object({
    ...PaginationSchema,
    startDate: Joi.date().iso().messages({
        'date.format': ' O campo startDate deve ser uma data válida.',
    }),
    endDate: Joi.date().iso().messages({
        'date.format': ' O campo endDate deve ser uma data válida.',
    }),
    type: Joi.string().valid('cash-in', 'cash-out').messages({
        'any.only': 'O campo type deve ser cash-in ou cash-out.',
    }),
}).unknown(true);
