import reducer, { initialState } from '../reducer';
import * as UserActions from '../actions';

describe('UIStore - UnitTestCases', () => {
    describe('UIStore - Reducer', () => {
        it('should return the initial state', () => {
            const state = reducer(undefined, { type: '@@INIT' });
            expect(state).toEqual(initialState);
        });
        describe('UIStore - Reducer - ToggleHideValues', () => {
            it('should handle ToggleHideValues action', () => {
                const state = reducer(
                    undefined,
                    UserActions.toggleHideValues()
                );
                expect(state).toEqual({
                    ...initialState,
                    values_hidden: !initialState.values_hidden,
                });
            });
        });
        describe('UIStore - Reducer - TransactionsModal', () => {
            it('should handle TransactionsModalOpen action', () => {
                const state = reducer(
                    undefined,
                    UserActions.openTransactionsModal()
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_modal_open: true,
                });
            });
            it('should handle TransactionsModalClose action', () => {
                const state = reducer(
                    undefined,
                    UserActions.closeTransactionsModal()
                );
                expect(state).toEqual({
                    ...initialState,
                    transactions_modal_open: false,
                });
            });
        });
    });
});
