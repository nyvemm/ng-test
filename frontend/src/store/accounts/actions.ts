import { AccountsBalanceResponseModel, ApiErrorModel } from '../../models';

export enum Actions {
    ACCOUNTS_BALANCE = 'ACCOUNTS_BALANCE',
    ACCOUNTS_BALANCE_SUCCESS = 'ACCOUNTS_BALANCE_SUCCESS',
    ACCOUNTS_BALANCE_FAILURE = 'ACCOUNTS_BALANCE_FAILURE',
    ACCOUNTS_BALANCE_RESET = 'ACCOUNTS_BALANCE_RESET',
}

export type ACCOUNTS_BALANCE_TYPE = {
    type: Actions.ACCOUNTS_BALANCE;
};

export type ACCOUNTS_BALANCE_SUCCESS_TYPE = {
    type: Actions.ACCOUNTS_BALANCE_SUCCESS;
    payload: AccountsBalanceResponseModel;
};

export type ACCOUNTS_BALANCE_FAILURE_TYPE = {
    type: Actions.ACCOUNTS_BALANCE_FAILURE;
    payload: ApiErrorModel;
};

export type ACCOUNTS_BALANCE_RESET_TYPE = {
    type: Actions.ACCOUNTS_BALANCE_RESET;
};

export const accountsBalance = (): ACCOUNTS_BALANCE_TYPE => ({
    type: Actions.ACCOUNTS_BALANCE,
});

export const accountsBalanceSuccess = (
    payload: AccountsBalanceResponseModel
): ACCOUNTS_BALANCE_SUCCESS_TYPE => ({
    type: Actions.ACCOUNTS_BALANCE_SUCCESS,
    payload,
});

export const accountsBalanceFailure = (
    payload: ApiErrorModel
): ACCOUNTS_BALANCE_FAILURE_TYPE => ({
    type: Actions.ACCOUNTS_BALANCE_FAILURE,
    payload,
});

export const accountsBalanceReset = (): ACCOUNTS_BALANCE_RESET_TYPE => ({
    type: Actions.ACCOUNTS_BALANCE_RESET,
});

export type ActionTypes =
    | ACCOUNTS_BALANCE_TYPE
    | ACCOUNTS_BALANCE_SUCCESS_TYPE
    | ACCOUNTS_BALANCE_FAILURE_TYPE
    | ACCOUNTS_BALANCE_RESET_TYPE;
