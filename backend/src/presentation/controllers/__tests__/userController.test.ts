import UserController from '@controllers/userController';
import { Request, Response } from 'express';
import { createRequest, createResponse, MockRequest, MockResponse } from 'node-mocks-http';
import knexMock from 'mock-knex';
import Database from '@db/database';

knexMock.mock(Database);

const tracker = knexMock.getTracker();

describe('UserController - UnitTestCases', () => {
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

    describe('Signup', () => {
        request = createRequest({
            method: 'POST',
            url: '/signup',
        });

        it('should return 201 when the user is created', async () => {
            tracker.on('query', (query) => {
                query.response([]);
            });

            request.body = {
                username: 'testt',
                password: 'testing123',
                confirmPassword: 'testing123',
            };

            await UserController.signup(request, response);
            expect(response.statusCode).toBe(201);
        });
        it('should return 400 when the body is invalid', async () => {
            request.body = {
                username: 'testt',
                password: '123',
                confirmPassword: '123',
            };

            await UserController.signup(request, response);
            expect(response.statusCode).toBe(400);
        });
        it('should return 409 when the user already exists', async () => {
            tracker.on('query', (query) => {
                query.response({ username: 'testt' });
            });

            request.body = {
                username: 'testt',
                password: '12345678',
                confirmPassword: '12345678',
            };

            await UserController.signup(request, response);
            expect(response.statusCode).toBe(409);
        });
    });

    describe('Login', () => {
        request = createRequest({
            method: 'POST',
            url: '/login',
        });

        it('should return 200 when the user is logged in', async () => {
            tracker.on('query', (query) => {
                query.response({
                    username: 'testt',
                    password: 'b822f1cd2dcfc685b47e83e3980289fd5d8e3ff3a82def24d7d1d68bb272eb32',
                });
            });

            request.body = {
                username: 'testt',
                password: 'testing123',
            };

            await UserController.login(request, response);
            expect(response.statusCode).toBe(200);
        });

        it('should return 400 when the body is invalid', async () => {
            request.body = {
                username: 'testt',
                password: '123',
            };

            await UserController.login(request, response);
            expect(response.statusCode).toBe(400);
        });
        it('should return 401 when the user is not found', async () => {
            tracker.on('query', (query) => {
                query.response([]);
            });

            request.body = {
                username: 'testt',
                password: 'testing123',
            };

            await UserController.login(request, response);
            expect(response.statusCode).toBe(401);
        });
    });

    describe('Logout', () => {
        request = createRequest({
            method: 'POST',
            url: '/logout',
        });

        it('should return 200 when the user is logged out', async () => {
            tracker.on('query', (query) => {
                query.response({});
            });

            request.headers.authorization = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

            await UserController.logout(request, response);
            expect(response.statusCode).toBe(200);
        });

        it('should return 500 when the token update fails', async () => {
            tracker.on('query', (query) => {
                query.reject('error');
            });

            request.headers.authorization = '';
            await UserController.logout(request, response);
            expect(response.statusCode).toBe(500);
        });
    });
});
