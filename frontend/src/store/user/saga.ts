import * as UserActions from './actions';
import HttpService from '../../services/http.service';
import { takeLatest, call, put } from 'redux-saga/effects';
import UserService from '../../services/user.service';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

export default function* userSaga() {
    yield takeLatest(UserActions.Actions.USER_SIGNUP, userSignupWorker);
    yield takeLatest(UserActions.Actions.USER_LOGIN, userLoginWorker);
    yield takeLatest(UserActions.Actions.USER_LOGOUT, userLogoutWorker);
}

export function* userSignupWorker(action: UserActions.USER_SIGNUP_TYPE) {
    try {
        yield call(UserService.signup, action.payload);
        yield put(UserActions.userSignupSuccess());
    } catch (error) {
        const payload = HttpService.toApiError(error);
        yield put(UserActions.userSignupFailure(payload));
    }
}

export function* userLoginWorker(action: UserActions.USER_LOGIN_TYPE) {
    try {
        const response = (yield call(
            UserService.login,
            action.payload
        )) as AxiosResponse;
        yield put(UserActions.userLoginSuccess(response.data));
    } catch (error) {
        const payload = HttpService.toApiError(error);
        yield put(UserActions.userLoginFailure(payload));
    }
}

export function* userLogoutWorker() {
    try {
        yield call(UserService.logout);
        yield put(UserActions.userLogoutSuccess());
        yield put(UserActions.userLoginReset());
        localStorage.removeItem('token');
        toast('Você foi deslogado com sucesso!', { type: 'success' });
    } catch (error) {
        const payload = HttpService.toApiError(error);
        yield put(UserActions.userLogoutFailure(payload));
    }
}
