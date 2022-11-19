import {
    ApiErrorModel,
    TransactionsListRequestModel,
    TransactionsListResponseModel,
    TransactionsCreateRequestModel,
} from '../../models';

export enum Actions {
    TRANSACTIONS_LIST = 'TRANSACTIONS_LIST',
    TRANSACTIONS_LIST_SUCCESS = 'TRANSACTIONS_LIST_SUCCESS',
    TRANSACTIONS_LIST_FAILURE = 'TRANSACTIONS_LIST_FAILURE',
    TRANSACTIONS_LIST_RESET = 'TRANSACTIONS_LIST_RESET',
    TRANSACTIONS_CREATE = 'TRANSACTIONS_CREATE',
    TRANSACTIONS_CREATE_SUCCESS = 'TRANSACTIONS_CREATE_SUCCESS',
    TRANSACTIONS_CREATE_FAILURE = 'TRANSACTIONS_CREATE_FAILURE',
    TRANSACTIONS_CREATE_RESET = 'TRANSACTIONS_CREATE_RESET',
}

export type TRANSACTIONS_LIST_TYPE = {
    type: Actions.TRANSACTIONS_LIST;
    payload: TransactionsListRequestModel;
};

export type TRANSACTIONS_LIST_SUCCESS_TYPE = {
    type: Actions.TRANSACTIONS_LIST_SUCCESS;
    payload: TransactionsListResponseModel;
};

export type TRANSACTIONS_LIST_FAILURE_TYPE = {
    type: Actions.TRANSACTIONS_LIST_FAILURE;
    payload: ApiErrorModel;
};

export type TRANSACTIONS_LIST_RESET_TYPE = {
    type: Actions.TRANSACTIONS_LIST_RESET;
};

export type TRANSACTIONS_CREATE_TYPE = {
    type: Actions.TRANSACTIONS_CREATE;
    payload: TransactionsCreateRequestModel;
};

export type TRANSACTIONS_CREATE_SUCCESS_TYPE = {
    type: Actions.TRANSACTIONS_CREATE_SUCCESS;
};

export type TRANSACTIONS_CREATE_FAILURE_TYPE = {
    type: Actions.TRANSACTIONS_CREATE_FAILURE;
    payload: ApiErrorModel;
};

export type TRANSACTIONS_CREATE_RESET_TYPE = {
    type: Actions.TRANSACTIONS_CREATE_RESET;
};

export const transactionsList = (
    payload: TransactionsListRequestModel
): TRANSACTIONS_LIST_TYPE => ({
    type: Actions.TRANSACTIONS_LIST,
    payload,
});

export const transactionsListSuccess = (
    payload: TransactionsListResponseModel
): TRANSACTIONS_LIST_SUCCESS_TYPE => ({
    type: Actions.TRANSACTIONS_LIST_SUCCESS,
    payload,
});

export const transactionsListFailure = (
    payload: ApiErrorModel
): TRANSACTIONS_LIST_FAILURE_TYPE => ({
    type: Actions.TRANSACTIONS_LIST_FAILURE,
    payload,
});

export const transactionsListReset = (): TRANSACTIONS_LIST_RESET_TYPE => ({
    type: Actions.TRANSACTIONS_LIST_RESET,
});

export const transactionsCreate = (
    payload: TransactionsCreateRequestModel
): TRANSACTIONS_CREATE_TYPE => ({
    type: Actions.TRANSACTIONS_CREATE,
    payload,
});

export const transactionsCreateSuccess =
    (): TRANSACTIONS_CREATE_SUCCESS_TYPE => ({
        type: Actions.TRANSACTIONS_CREATE_SUCCESS,
    });

export const transactionsCreateFailure = (
    payload: ApiErrorModel
): TRANSACTIONS_CREATE_FAILURE_TYPE => ({
    type: Actions.TRANSACTIONS_CREATE_FAILURE,
    payload,
});

export const transactionsCreateReset = (): TRANSACTIONS_CREATE_RESET_TYPE => ({
    type: Actions.TRANSACTIONS_CREATE_RESET,
});

export type ActionTypes =
    | TRANSACTIONS_LIST_TYPE
    | TRANSACTIONS_LIST_SUCCESS_TYPE
    | TRANSACTIONS_LIST_FAILURE_TYPE
    | TRANSACTIONS_LIST_RESET_TYPE
    | TRANSACTIONS_CREATE_TYPE
    | TRANSACTIONS_CREATE_SUCCESS_TYPE
    | TRANSACTIONS_CREATE_FAILURE_TYPE
    | TRANSACTIONS_CREATE_RESET_TYPE;
