import { StateType } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { accountsBalance } from '../store/accounts';

export const useBalances = () => {
    const dispatch = useDispatch();
    const { accounts_balance } = useSelector(
        (state: StateType) => state.accounts
    );

    const refreshBalance = useCallback(() => {
        dispatch(accountsBalance());
    }, [dispatch]);

    return {
        refreshBalance,
        balance: accounts_balance,
    };
};
