import {
    UserSignupRequestModel,
    ApiErrorModel,
    UserLoginResponseModel,
    UserLoginRequestModel,
} from '../../models';

export enum Actions {
    USER_SIGNUP = 'USER_SIGNUP',
    USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS',
    USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE',
    USER_SIGNUP_RESET = 'USER_SIGNUP_RESET',
    USER_LOGIN = 'USER_LOGIN',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE',
    USER_LOGIN_RESET = 'USER_LOGIN_RESET',
    USER_LOGOUT = 'USER_LOGOUT',
    USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS',
    USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE',
    USER_LOGOUT_RESET = 'USER_LOGOUT_RESET',
}

export type USER_SIGNUP_TYPE = {
    type: Actions.USER_SIGNUP;
    payload: UserSignupRequestModel;
};

export type USER_SIGNUP_SUCCESS_TYPE = {
    type: Actions.USER_SIGNUP_SUCCESS;
};

export type USER_SIGNUP_FAILURE_TYPE = {
    type: Actions.USER_SIGNUP_FAILURE;
    payload: ApiErrorModel;
};

export type USER_SIGNUP_RESET_TYPE = {
    type: Actions.USER_SIGNUP_RESET;
};

export type USER_LOGIN_TYPE = {
    type: Actions.USER_LOGIN;
    payload: UserLoginRequestModel;
};

export type USER_LOGIN_SUCCESS_TYPE = {
    type: Actions.USER_LOGIN_SUCCESS;
    payload: UserLoginResponseModel;
};

export type USER_LOGIN_FAILURE_TYPE = {
    type: Actions.USER_LOGIN_FAILURE;
    payload: ApiErrorModel;
};

export type USER_LOGIN_RESET_TYPE = {
    type: Actions.USER_LOGIN_RESET;
};

export type USER_LOGOUT_TYPE = {
    type: Actions.USER_LOGOUT;
};

export type USER_LOGOUT_SUCCESS_TYPE = {
    type: Actions.USER_LOGOUT_SUCCESS;
};

export type USER_LOGOUT_FAILURE_TYPE = {
    type: Actions.USER_LOGOUT_FAILURE;
    payload: ApiErrorModel;
};

export type USER_LOGOUT_RESET_TYPE = {
    type: Actions.USER_LOGOUT_RESET;
};

export const userSignup = (
    payload: UserSignupRequestModel
): USER_SIGNUP_TYPE => {
    return {
        type: Actions.USER_SIGNUP,
        payload,
    };
};

export const userSignupSuccess = (): USER_SIGNUP_SUCCESS_TYPE => ({
    type: Actions.USER_SIGNUP_SUCCESS,
});

export const userSignupFailure = (
    payload: ApiErrorModel
): USER_SIGNUP_FAILURE_TYPE => ({
    type: Actions.USER_SIGNUP_FAILURE,
    payload,
});

export const userSignupReset = (): USER_SIGNUP_RESET_TYPE => ({
    type: Actions.USER_SIGNUP_RESET,
});

export const userLogin = (payload: UserLoginRequestModel): USER_LOGIN_TYPE => ({
    type: Actions.USER_LOGIN,
    payload,
});

export const userLoginSuccess = (
    payload: UserLoginResponseModel
): USER_LOGIN_SUCCESS_TYPE => ({
    type: Actions.USER_LOGIN_SUCCESS,
    payload,
});

export const userLoginFailure = (
    payload: ApiErrorModel
): USER_LOGIN_FAILURE_TYPE => ({
    type: Actions.USER_LOGIN_FAILURE,
    payload,
});

export const userLoginReset = (): USER_LOGIN_RESET_TYPE => ({
    type: Actions.USER_LOGIN_RESET,
});

export const userLogout = (): USER_LOGOUT_TYPE => ({
    type: Actions.USER_LOGOUT,
});

export const userLogoutSuccess = (): USER_LOGOUT_SUCCESS_TYPE => ({
    type: Actions.USER_LOGOUT_SUCCESS,
});

export const userLogoutFailure = (
    payload: ApiErrorModel
): USER_LOGOUT_FAILURE_TYPE => ({
    type: Actions.USER_LOGOUT_FAILURE,
    payload,
});

export const userLogoutReset = (): USER_LOGOUT_RESET_TYPE => ({
    type: Actions.USER_LOGOUT_RESET,
});

export type ActionTypes =
    | USER_SIGNUP_TYPE
    | USER_SIGNUP_SUCCESS_TYPE
    | USER_SIGNUP_FAILURE_TYPE
    | USER_SIGNUP_RESET_TYPE
    | USER_LOGIN_TYPE
    | USER_LOGIN_SUCCESS_TYPE
    | USER_LOGIN_FAILURE_TYPE
    | USER_LOGIN_RESET_TYPE
    | USER_LOGOUT_TYPE
    | USER_LOGOUT_SUCCESS_TYPE
    | USER_LOGOUT_FAILURE_TYPE
    | USER_LOGOUT_RESET_TYPE;
