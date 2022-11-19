import { Actions, ActionTypes } from './actions';
import {
    ApiErrorModel,
    StatusEnum,
    nullApiErrorModel,
    nullUserLoginResponseModel,
    UserLoginResponseModel,
} from '../../models';

export type State = {
    user_signup_status: StatusEnum;
    user_signup_error: ApiErrorModel;
    user_login_status: StatusEnum;
    user_login_error: ApiErrorModel;
    user_login: UserLoginResponseModel;
    user_logout_status: StatusEnum;
    user_logout_error: ApiErrorModel;
};

export const initialState: State = {
    user_signup_status: StatusEnum.IDLE,
    user_signup_error: nullApiErrorModel,
    user_login_status: StatusEnum.IDLE,
    user_login_error: nullApiErrorModel,
    user_login: nullUserLoginResponseModel,
    user_logout_status: StatusEnum.IDLE,
    user_logout_error: nullApiErrorModel,
};

export default function (
    state = initialState,
    action: ActionTypes | { type: '@@INIT' }
): State {
    switch (action.type) {
        case Actions.USER_SIGNUP:
            return {
                ...state,
                user_signup_status: StatusEnum.LOADING,
            };
        case Actions.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                user_signup_status: StatusEnum.SUCCESS,
                user_signup_error: nullApiErrorModel,
            };
        case Actions.USER_SIGNUP_FAILURE:
            return {
                ...state,
                user_signup_status: StatusEnum.FAILURE,
                user_signup_error: action.payload,
            };
        case Actions.USER_SIGNUP_RESET:
            return {
                ...state,
                user_signup_status: StatusEnum.IDLE,
                user_signup_error: nullApiErrorModel,
            };
        case Actions.USER_LOGIN:
            return {
                ...state,
                user_login_status: StatusEnum.LOADING,
            };
        case Actions.USER_LOGIN_SUCCESS:
            return {
                ...state,
                user_login_status: StatusEnum.SUCCESS,
                user_login_error: nullApiErrorModel,
                user_login: action.payload,
            };
        case Actions.USER_LOGIN_FAILURE:
            return {
                ...state,
                user_login_status: StatusEnum.FAILURE,
                user_login_error: action.payload,
                user_login: nullUserLoginResponseModel,
            };
        case Actions.USER_LOGIN_RESET:
            return {
                ...state,
                user_login_status: StatusEnum.IDLE,
                user_login_error: nullApiErrorModel,
                user_login: nullUserLoginResponseModel,
            };
        case Actions.USER_LOGOUT:
            return {
                ...state,
                user_logout_status: StatusEnum.LOADING,
            };
        case Actions.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                user_logout_status: StatusEnum.SUCCESS,
                user_logout_error: nullApiErrorModel,
            };
        case Actions.USER_LOGOUT_FAILURE:
            return {
                ...state,
                user_logout_status: StatusEnum.FAILURE,
                user_logout_error: action.payload,
            };
        case Actions.USER_LOGOUT_RESET:
            return {
                ...state,
                user_logout_status: StatusEnum.IDLE,
                user_logout_error: nullApiErrorModel,
            };
        default:
            return state;
    }
}
