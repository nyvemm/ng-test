import { all, fork, put, spawn, take } from 'redux-saga/effects';
import { ApiErrorModel, UserLoginResponseModel } from '../models';
import { toast } from 'react-toastify';

import { saga as users, userLoginReset } from './user';
import { saga as accounts } from './accounts';
import { saga as transactions } from './transactions';

export default function* () {
    yield fork(bootstrap);
}

function* bootstrap() {
    try {
        yield all([
            spawn(users),
            spawn(accounts),
            spawn(transactions),
            spawn(failureWatcher),
            spawn(authenticationWatcher),
        ]);
    } catch (error) {
        console.log('Error in bootstrap', error);
    }
}

function* failureWatcher() {
    while (true) {
        const capturedAction = (yield take((action: { type: string }) =>
            /FAILURE$/.test(action.type)
        )) as { payload: ApiErrorModel };

        if (capturedAction) {
            let payload = capturedAction.payload;

            if (
                payload?.messages?.some(
                    (message) => message?.message === 'Token inválido'
                )
            ) {
                localStorage.removeItem('authorization');
                yield put(userLoginReset());
            }

            payload?.messages?.forEach((error) => {
                toast(error.message, {
                    type: 'error',
                });
            });
        }
    }
}

function* authenticationWatcher() {
    while (true) {
        const capturedAction = (yield take((action: { type: string }) =>
            /USER_LOGIN_SUCCESS$/.test(action.type)
        )) as { payload: UserLoginResponseModel };

        if (capturedAction) {
            const payload = capturedAction.payload;
            const token = payload?.token;

            if (token) {
                localStorage.setItem('authorization', token);
            }
        }
    }
}
