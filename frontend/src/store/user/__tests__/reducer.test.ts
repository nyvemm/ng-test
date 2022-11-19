import reducer, { initialState } from '../reducer';
import * as UserActions from '../actions';
import * as UserModels from '../../../models/user';
import { nullApiErrorModel, StatusEnum } from '../../../models';

describe('UserStore - UnitTestCases', () => {
    describe('UserStore - Reducer', () => {
        it('should return the initial state', () => {
            const state = reducer(undefined, { type: '@@INIT' });
            expect(state).toEqual(initialState);
        });
        describe('UserStore - Reducer - Signup', () => {
            it('should handle userSignup action', () => {
                const state = reducer(undefined, UserActions.userSignup(UserModels.nullUserSignupRequestModel));
                expect(state).toEqual({
                    ...initialState,
                    user_signup_status: StatusEnum.LOADING,
                });
            });
            it('should handle userSignupSuccess action', () => {
                const state = reducer(undefined, UserActions.userSignupSuccess());
                expect(state).toEqual({
                    ...initialState,
                    user_signup_status: StatusEnum.SUCCESS,
                });
            });
            it('should handle userSignupFailure action', () => {
                const state = reducer(undefined, UserActions.userSignupFailure(nullApiErrorModel));
                expect(state).toEqual({
                    ...initialState,
                    user_signup_status: StatusEnum.FAILURE,
                });
            });
            it('should handle userSignupReset action', () => {
                const state = reducer(undefined, UserActions.userSignupReset());
                expect(state).toEqual({
                    ...initialState,
                    user_signup_status: StatusEnum.IDLE,
                    user_signup_error: nullApiErrorModel,
                });
            });
        });
        describe('UserStore - Reducer - Login', () => {
            it('should handle userLogin action', () => {
                const state = reducer(undefined, UserActions.userLogin(UserModels.nullUserLoginRequestModel));
                expect(state).toEqual({
                    ...initialState,
                    user_login_status: StatusEnum.LOADING,
                });
            });
            it('should handle userLoginSuccess action', () => {
                const state = reducer(undefined, UserActions.userLoginSuccess(UserModels.nullUserLoginResponseModel));
                expect(state).toEqual({
                    ...initialState,
                    user_login_status: StatusEnum.SUCCESS,
                    user_login: UserModels.nullUserLoginResponseModel,
                });
            });
            it('should handle userLoginFailure action', () => {
                const state = reducer(undefined, UserActions.userLoginFailure(nullApiErrorModel));
                expect(state).toEqual({
                    ...initialState,
                    user_login_status: StatusEnum.FAILURE,
                    user_login: UserModels.nullUserLoginResponseModel,
                });
            });
            it('should handle userLoginReset action', () => {
                const state = reducer(undefined, UserActions.userLoginReset());
                expect(state).toEqual({
                    ...initialState,
                    user_login_status: StatusEnum.IDLE,
                    user_login: UserModels.nullUserLoginResponseModel,
                });
            });
        });
        describe('UserStore - Reducer - Logout', () => {
            it('should handle userLogout action', () => {
                const state = reducer(undefined, UserActions.userLogout());
                expect(state).toEqual({
                    ...initialState,
                    user_logout_status: StatusEnum.LOADING,
                });
            });
            it('should handle userLogoutSuccess action', () => {
                const state = reducer(undefined, UserActions.userLogoutSuccess());
                expect(state).toEqual({
                    ...initialState,
                    user_logout_status: StatusEnum.SUCCESS,
                });
            });
            it('should handle userLogoutFailure action', () => {
                const state = reducer(undefined, UserActions.userLogoutFailure(nullApiErrorModel));
                expect(state).toEqual({
                    ...initialState,
                    user_logout_status: StatusEnum.FAILURE,
                });
            });
            it('should handle userLogoutReset action', () => {
                const state = reducer(undefined, UserActions.userLogoutReset());
                expect(state).toEqual({
                    ...initialState,
                    user_logout_status: StatusEnum.IDLE,
                    user_logout_error: nullApiErrorModel,
                });
            });
        });
    });
});
