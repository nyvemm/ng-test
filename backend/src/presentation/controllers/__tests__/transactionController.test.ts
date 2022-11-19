import { Request, Response } from 'express';
import { createRequest, createResponse, MockRequest, MockResponse } from 'node-mocks-http';
import knexMock from 'mock-knex';
import Database from '@db/database';
import TransactionController from '@controllers/transactionController';

knexMock.mock(Database);

const tracker = knexMock.getTracker();

describe('TransactionController - UnitTestCases', () => {
    let request: MockRequest<Request>;
    let response: MockResponse<Response>;

    beforeEach(() => {
        tracker.install();
        request = createRequest();
        response = createResponse();
    });

    afterEach(() => {
        tracker.uninstall();
    });

    describe('CreateTransactions', () => {
        request = createRequest({
            method: 'POST',
            url: '/transactions',
        });

        it('should return 201 when the transaction is created', async () => {
            tracker.on('query', (query) => {
                if (query.sql.includes('token')) {
                    query.response({ accountId: 1 });
                } else {
                    console.log('query.sql', query.sql);
                    query.response({ accountId: 2 });
                }
            });

            request.body = {
                creditedAccountUsername: '123',
                value: 100,
            };

            await TransactionController.createTransactions(request, response);
            expect(response.statusCode).toBe(201);
        });

        it('should return 400 when the body is invalid', async () => {
            request.body = {
                creditedAccountUsername: '123',
                value: 'good money',
            };

            await TransactionController.createTransactions(request, response);
            expect(response.statusCode).toBe(400);
        });

        it('should return 404 when the account does not exist', async () => {
            tracker.on('query', (query) => {
                if (query.sql.includes('token')) {
                    query.response({ accountId: 1 });
                } else {
                    query.response([]);
                }
            });

            request.body = {
                creditedAccountUsername: '123',
                value: 100,
            };

            await TransactionController.createTransactions(request, response);
            expect(response.statusCode).toBe(404);
        });

        it('should return 403 when the user tries to transfer to his own account', async () => {
            tracker.on('query', (query) => {
                query.response({ accountId: 1 });
            });

            request.body = {
                creditedAccountUsername: '123',
                value: 100,
            };

            await TransactionController.createTransactions(request, response);
            expect(response.statusCode).toBe(403);
        });

        it('should return 403 when value is zero or negative', async () => {
            tracker.on('query', (query) => {
                console.log(query.sql);
                if (query.sql.includes('token')) {
                    query.response({ accountId: 1 });
                } else {
                    query.response({ accountId: 2 });
                }
            });

            request.body = {
                creditedAccountUsername: '123',
                value: -2,
            };

            await TransactionController.createTransactions(request, response);
            expect(response.statusCode).toBe(403);
        });

        it('should return 403 when the user does not have enough money', async () => {
            tracker.on('query', (query) => {
                if (query.sql.includes('balance')) {
                    query.response(undefined);
                } else if (query.sql.includes('token')) {
                    query.response({ accountId: 1 });
                } else {
                    query.response({ accountId: 2 });
                }
            });

            request.body = {
                creditedAccountUsername: '123',
                value: 100000,
            };

            await TransactionController.createTransactions(request, response);
            expect(response.statusCode).toBe(403);
        });
    });

    describe('ListTransactions', () => {
        request = createRequest({
            method: 'GET',
            url: '/transactions',
        });

        it('should return 200 when the transactions are listed', async () => {
            tracker.on('query', (query) => {
                query.response({ id: 1 });
            });

            await TransactionController.listTransactions(request, response);
            expect(response.statusCode).toBe(200);
        });

        it('should return 400 when the query is invalid', async () => {
            request.query = {
                page: 'NaN',
                limit: 'NaN',
            };

            await TransactionController.listTransactions(request, response);
            expect(response.statusCode).toBe(400);
        });

        it('should return 500 when the database fails', async () => {
            tracker.on('query', (query) => {
                query.reject('Database error');
            });

            await TransactionController.listTransactions(request, response);
            expect(response.statusCode).toBe(500);
        });

        it('should return 200 when the filter with startDate and endDate and type is cash-in', async () => {
            tracker.on('query', (query) => {
                query.response({ id: 1 });
            });

            request.query = {
                startDate: '2021-01-01',
                endDate: '2021-01-01',
                type: 'cash-in',
            };

            await TransactionController.listTransactions(request, response);
            expect(response.statusCode).toBe(200);
        });

        it('should return 200 when the filter with startDate and type is cash-out', async () => {
            tracker.on('query', (query) => {
                query.response({ id: 1 });
            });

            request.query = {
                startDate: '2021-01-01',
                type: 'cash-out',
            };

            await TransactionController.listTransactions(request, response);
            expect(response.statusCode).toBe(200);
        });
    });
});
