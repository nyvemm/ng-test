import { useDispatch, useSelector } from 'react-redux';
import { StatusEnum, TransactionsListRequestModel } from '../models';
import { StateType } from '../store/reducers';
import { useCallback } from 'react';
import { transactionsList } from '../store/transactions';

export const useTransactions = (request?: TransactionsListRequestModel) => {
    const dispatch = useDispatch();
    const { transactions_list, transactions_list_status } = useSelector(
        (state: StateType) => state.transactions
    );

    const refreshTransactions = useCallback(
        (customPayload?: TransactionsListRequestModel) => {
            if (customPayload) {
                dispatch(transactionsList(customPayload));
            } else {
                dispatch(transactionsList(request || {}));
            }
        },
        [dispatch, request]
    );

    return {
        transactions: transactions_list,
        success: transactions_list_status === StatusEnum.SUCCESS,
        idle: transactions_list_status === StatusEnum.IDLE,
        refreshTransactions,
    };
};
