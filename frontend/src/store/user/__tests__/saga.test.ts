import { recordSaga } from '../../../utils/test.utils';
import * as userWorkers from '../saga';
import * as userActions from '../actions';
import * as userModels from '../../../models/user';
import UserService from '../../../services/user.service';

describe('UserStore - UnitTestCases', () => {
    describe('UserStore - Saga', () => {
        describe('UserStore - Saga - Signup', () => {
            it('should call userSignupWorker and dispatch success action', async () => {
                // @ts-ignore
                jest.spyOn(UserService, 'signup').mockImplementation(() =>
                    Promise.resolve({})
                );

                const dispatched = await recordSaga(
                    userWorkers.userSignupWorker,
                    userActions.userSignup(
                        userModels.nullUserSignupRequestModel
                    )
                );

                expect(dispatched).toContainEqual(
                    userActions.userSignupSuccess()
                );
            });
            it('should call userSignupWorker and dispatch failure action', async () => {
                // @ts-ignore
                jest.spyOn(UserService, 'signup').mockImplementation(() =>
                    Promise.reject({})
                );

                const dispatched = await recordSaga(
                    userWorkers.userSignupWorker,
                    userActions.userSignup(
                        userModels.nullUserSignupRequestModel
                    )
                );

                const action = <userActions.USER_SIGNUP_FAILURE_TYPE>(
                    (<unknown>dispatched[0])
                );
                expect(action.type).toEqual(
                    userActions.Actions.USER_SIGNUP_FAILURE
                );
            });
        });

        describe('UserStore - Saga - Login', () => {
            it('should call userLoginWorker and dispatch success action', async () => {
                // @ts-ignore
                jest.spyOn(UserService, 'login').mockImplementation(() =>
                    Promise.resolve({
                        data: userModels.nullUserLoginResponseModel,
                    })
                );

                const dispatched = await recordSaga(
                    userWorkers.userLoginWorker,
                    userActions.userLogin(userModels.nullUserLoginRequestModel)
                );

                expect(dispatched).toContainEqual(
                    userActions.userLoginSuccess(
                        userModels.nullUserLoginResponseModel
                    )
                );
            });

            it('should call userLoginWorker and dispatch failure action', async () => {
                // @ts-ignore
                jest.spyOn(UserService, 'login').mockImplementation(() =>
                    Promise.reject({})
                );

                const dispatched = await recordSaga(
                    userWorkers.userLoginWorker,
                    userActions.userLogin(userModels.nullUserLoginRequestModel)
                );

                const action = <userActions.USER_LOGIN_FAILURE_TYPE>(
                    (<unknown>dispatched[0])
                );
                expect(action.type).toEqual(
                    userActions.Actions.USER_LOGIN_FAILURE
                );
            });
        });

        describe('UserStore - Saga - Logout', () => {
            it('should call userLogoutWorker and dispatch success action', async () => {
                // @ts-ignore
                jest.spyOn(UserService, 'logout').mockImplementation(() =>
                    Promise.resolve({})
                );

                const dispatched = await recordSaga(
                    userWorkers.userLogoutWorker,
                    userActions.userLogout()
                );

                expect(dispatched).toContainEqual(
                    userActions.userLogoutSuccess()
                );
            });

            it('should call userLogoutWorker and dispatch failure action', async () => {
                // @ts-ignore
                jest.spyOn(UserService, 'logout').mockImplementation(() =>
                    Promise.reject({})
                );

                const dispatched = await recordSaga(
                    userWorkers.userLogoutWorker,
                    userActions.userLogout()
                );

                const action = <userActions.USER_LOGOUT_FAILURE_TYPE>(
                    (<unknown>dispatched[0])
                );
                expect(action.type).toEqual(
                    userActions.Actions.USER_LOGOUT_FAILURE
                );
            });
        });
    });
});
