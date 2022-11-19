import reducer, { initialState } from '../reducer';
import { nullApiErrorModel, StatusEnum } from '../../../models';
import * as AccountsActions from '../actions';
import * as AccountsModels from '../../../models/accounts';

describe('AccountsStore - UnitTestCases', () => {
    describe('AccountsStore - Reducer', () => {
        it('should return the initial state', () => {
            const state = reducer(undefined, { type: '@@INIT' });
            expect(state).toEqual(initialState);
        });
        describe('AccountsStore - Reducer - Balance', () => {
            it('should handle accountsBalance action', () => {
                const state = reducer(
                    undefined,
                    AccountsActions.accountsBalance()
                );
                expect(state).toEqual({
                    ...initialState,
                    accounts_balance_status: StatusEnum.LOADING,
                });
            });
            it('should handle accountsBalanceSuccess action', () => {
                const state = reducer(
                    undefined,
                    AccountsActions.accountsBalanceSuccess(
                        AccountsModels.nullAccountsBalanceResponseModel
                    )
                );
                expect(state).toEqual({
                    ...initialState,
                    accounts_balance_status: StatusEnum.SUCCESS,
                    accounts_balance:
                        AccountsModels.nullAccountsBalanceResponseModel,
                });
            });
            it('should handle accountsBalanceFailure action', () => {
                const state = reducer(
                    undefined,
                    AccountsActions.accountsBalanceFailure(nullApiErrorModel)
                );
                expect(state).toEqual({
                    ...initialState,
                    accounts_balance_status: StatusEnum.FAILURE,
                });
            });
            it('should handle accountsBalanceReset action', () => {
                const state = reducer(
                    undefined,
                    AccountsActions.accountsBalanceReset()
                );
                expect(state).toEqual({
                    ...initialState,
                    accounts_balance_status: StatusEnum.IDLE,
                    accounts_balance_error: nullApiErrorModel,
                });
            });
        });
    });
});
