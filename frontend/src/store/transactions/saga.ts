import * as TransactionsActions from './actions';
import HttpService from '../../services/http.service';
import { takeLatest, call, put } from 'redux-saga/effects';
import TransactionsService from '../../services/transactions.service';
import { AxiosResponse } from 'axios';

export default function* transactionsSaga() {
    yield takeLatest(
        TransactionsActions.Actions.TRANSACTIONS_LIST,
        transactionsListWorker
    );
    yield takeLatest(
        TransactionsActions.Actions.TRANSACTIONS_CREATE,
        transactionsCreateWorker
    );
}

export function* transactionsListWorker(
    action: TransactionsActions.TRANSACTIONS_LIST_TYPE
) {
    try {
        const response = (yield call(
            TransactionsService.list,
            action.payload
        )) as AxiosResponse;
        yield put(TransactionsActions.transactionsListSuccess(response.data));
    } catch (error) {
        const payload = HttpService.toApiError(error);
        yield put(TransactionsActions.transactionsListFailure(payload));
    }
}

export function* transactionsCreateWorker(
    action: TransactionsActions.TRANSACTIONS_CREATE_TYPE
) {
    try {
        yield call(TransactionsService.create, action.payload);
        yield put(TransactionsActions.transactionsCreateSuccess());
    } catch (error) {
        const payload = HttpService.toApiError(error);
        yield put(TransactionsActions.transactionsCreateFailure(payload));
    }
}
