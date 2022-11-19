import Joi from 'joi';

export const HofSchemaValidator = (schema: Joi.ObjectSchema, payload: any) => {
    return schema.validate(payload, { abortEarly: false });
};
