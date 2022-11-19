import * as AccountsActions from './actions';
import HttpService from '../../services/http.service';
import { takeLatest, call, put } from 'redux-saga/effects';
import AccountsService from '../../services/accounts.service';
import { AxiosResponse } from 'axios';

export default function* accountsSaga() {
    yield takeLatest(
        AccountsActions.Actions.ACCOUNTS_BALANCE,
        accountsBalanceWorker
    );
}

export function* accountsBalanceWorker() {
    try {
        const response = (yield call(
            AccountsService.getBalance
        )) as AxiosResponse;
        yield put(AccountsActions.accountsBalanceSuccess(response.data));
    } catch (error) {
        const payload = HttpService.toApiError(error);
        yield put(AccountsActions.accountsBalanceFailure(payload));
    }
}
