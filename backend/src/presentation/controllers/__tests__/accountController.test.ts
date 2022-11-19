import { Request, Response } from 'express';
import { createRequest, createResponse, MockRequest, MockResponse } from 'node-mocks-http';
import knexMock from 'mock-knex';
import Database from '@db/database';
import AccountController from '@controllers/accountController';

knexMock.mock(Database);

const tracker = knexMock.getTracker();

describe('AccountController - UnitTestCases', () => {
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

    describe('Balances', () => {
        request = createRequest({
            method: 'GET',
            url: '/balances',
        });

        it('should return 201 when fetching the balance', async () => {
            tracker.on('query', (query) => {
                query.response({
                    id: 1,
                    username: 'testt',
                    balance: '0.00',
                });
            });

            await AccountController.balance(request, response);
            expect(response.statusCode).toBe(200);
        });

        it('should return 500 when the database fails', async () => {
            tracker.on('query', (query) => {
                query.reject('Error');
            });

            await AccountController.balance(request, response);
            expect(response.statusCode).toBe(500);
        });
    });
});
