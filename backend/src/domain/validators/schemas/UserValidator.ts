import Joi from 'joi';

export const UserSchema = {
    username: Joi.string().required().min(3).messages({
        'any.required': 'O campo username é obrigatório.',
        'string.empty': 'O campo username não pode ser vazio.',
        'string.min': 'O campo username deve ter no mínimo 3 caracteres.',
    }),
    password: Joi.string().required().min(8).messages({
        'any.required': 'O campo senha é obrigatório.',
        'string.empty': 'O campo senha não pode ser vazio.',
        'string.min': 'O campo senha deve ter no mínimo 8 caracteres.',
    }),
};

export const SignupSchema = Joi.object({
    ...UserSchema,
    confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
        'any.required': 'O campo confirmar senha é obrigatório.',
        'string.empty': 'O campo confirmar senha não pode ser vazio.',
        'any.only': 'O campo confirmar senha deve ser igual ao campo senha.',
    }),
}).unknown(true);

export const LoginSchema = Joi.object({
    ...UserSchema,
}).unknown(true);
