import express from 'express';
import Cors from '@middlewares/cors';
import Fatal from '@middlewares/fatal';

export default (app: express.Application): void => {
    app.use(Cors);
    app.use(express.json());
    app.use(Fatal);
};
