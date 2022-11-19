import express from 'express';
import { Auth } from '@middlewares/auth';
import TransactionController from '@controllers/transactionController';

export default (app: express.Application): void => {
    app.post('/transactions', Auth, TransactionController.createTransactions);
    app.get('/transactions', Auth, TransactionController.listTransactions);
};
