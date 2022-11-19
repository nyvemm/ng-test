import reducer, { initialState } from '../reducer';
import { nullApiErrorModel, StatusEnum } from '../../../models';
import * as TransactionsActions from '../actions';
import * as TransactionsModels from '../../../models/transactions';

describe('Transactions - UnitTestCases', () => {
    describe('Transactions - Reducer', () => {
        it('should return the initial state', () => {
            const state = reducer(undefined, { type: '@@INIT' });
            expect(state).toEqual(initialState);
        });
        describe('TransactionsStore - Reducer - ListTransactions', () => {
            it('should handle transactionsList action', () => {
                const state = reducer(
                    undefined,
                    TransactionsActions.transactionsList(
                        TransactionsModels.nullTransactionsListRequestModel
                    )
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_list_status: StatusEnum.LOADING,
                });
            });
            it('should handle transactionsListSuccess action', () => {
                const state = reducer(
                    undefined,
                    TransactionsActions.transactionsListSuccess(
                        TransactionsModels.nullTransactionsListResponseModel
                    )
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_list_status: StatusEnum.SUCCESS,
                    transactions_list:
                        TransactionsModels.nullTransactionsListResponseModel,
                });
            });
            it('should handle transactionsListFailure action', () => {
                const state = reducer(
                    undefined,
                    TransactionsActions.transactionsListFailure(
                        nullApiErrorModel
                    )
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_list_status: StatusEnum.FAILURE,
                });
            });
            it('should handle transactionsListReset action', () => {
                const state = reducer(
                    undefined,
                    TransactionsActions.transactionsListReset()
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_list_status: StatusEnum.IDLE,
                    transactions_list_error: nullApiErrorModel,
                });
            });
        });
        describe('TransactionsStore - Reducer - CreateTransaction', () => {
            it('should handle transactionsCreate action', () => {
                const state = reducer(
                    undefined,
                    TransactionsActions.transactionsCreate(
                        TransactionsModels.nullTransactionsCreateRequestModel
                    )
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_create_status: StatusEnum.LOADING,
                });
            });
            it('should handle transactionsCreateSuccess action', () => {
                const state = reducer(
                    undefined,
                    TransactionsActions.transactionsCreateSuccess()
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_create_status: StatusEnum.SUCCESS,
                });
            });
            it('should handle transactionsCreateFailure action', () => {
                const state = reducer(
                    undefined,
                    TransactionsActions.transactionsCreateFailure(
                        nullApiErrorModel
                    )
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_create_status: StatusEnum.FAILURE,
                });
            });
            it('should handle transactionsCreateReset action', () => {
                const state = reducer(
                    undefined,
                    TransactionsActions.transactionsCreateReset()
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_create_status: StatusEnum.IDLE,
                    transactions_create_error: nullApiErrorModel,
                });
            });
        });
    });
});
