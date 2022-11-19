import express from 'express';
import userRoutes from '@routes/userRoutes';
import accountRoutes from '@routes/accountRoutes';
import transactionRoutes from '@routes/transactionRoutes';

export default (app: express.Application): void => {
    userRoutes(app);
    accountRoutes(app);
    transactionRoutes(app);
};
