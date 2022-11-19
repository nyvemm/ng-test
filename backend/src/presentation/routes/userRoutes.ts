import express from 'express';
import UserController from '@controllers/userController';
import { Auth } from '@middlewares/auth';

export default (app: express.Application): void => {
    app.post('/signup', UserController.signup);
    app.post('/login', UserController.login);
    app.post('/logout', Auth, UserController.logout);
};
