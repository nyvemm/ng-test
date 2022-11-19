import express from 'express';
import { Auth } from '@middlewares/auth';
import AccountController from '@controllers/accountController';

export default (app: express.Application): void => {
    app.get('/balance', Auth, AccountController.balance);
};
