import express from 'express';
import { LoginSchema, SignupSchema } from '@validators/schemas/UserValidator';
import { HofSchemaValidator } from '@validators/JoiValidator';
import BadRequestException from '@exceptions/BadRequestException';
import { CustomRequest } from '@models/requests.model';
import { LoginRequestModel, UserSignupRequestModel } from '@models/user.model';
import { UserService } from '@services/UserService';
import UserAlreadyExistsException from '@exceptions/AlreadyExistsException';
import ExceptionService from '@services/ExceptionService';
import InternalServerException from '@exceptions/InternalServerException';
import { ExceptionInterface } from '@models/error.model';

export default class UserController {
    static async signup(req: CustomRequest<UserSignupRequestModel>, res: express.Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const validation = HofSchemaValidator(SignupSchema, req.body);

            /* Checking if the body payload is valid */
            if (validation.error) {
                ExceptionService.handle(res, new BadRequestException(validation));
                return;
            }

            /* Checking if the user already exists */
            const userExists = await UserService.checkIfUserExists(username);

            if (userExists) {
                ExceptionService.handle(res, new UserAlreadyExistsException('O usuário já existe'));
                return;
            }

            await UserService.createUser(username, password);
            res.status(201).json();
        } catch (error) {
            ExceptionService.handle(res, new InternalServerException(), error);
        }
    }

    static async login(req: CustomRequest<LoginRequestModel>, res: express.Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const validation = HofSchemaValidator(LoginSchema, req.body);

            /* Checking if the body payload is valid */
            if (validation.error) {
                ExceptionService.handle(res, new BadRequestException(validation));
                return;
            }
            try {
                const user = await UserService.login(username, password);

                res.cookie('Authorization', user.token, { maxAge: 3600 });
                res.status(200).json(user);
            } catch (error) {
                ExceptionService.handle(res, <ExceptionInterface>error);
            }
        } catch (error) {
            ExceptionService.handle(res, new InternalServerException(), error);
        }
    }

    static async logout(req: express.Request, res: express.Response): Promise<void> {
        try {
            await UserService.logout(req?.headers?.authorization || '');
            res.clearCookie('Authorization');
            res.status(200).json();
        } catch (error) {
            ExceptionService.handle(res, new InternalServerException(), error);
        }
    }
}
