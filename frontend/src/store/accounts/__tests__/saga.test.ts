import { recordSaga } from '../../../utils/test.utils';
import * as AccountsWorkers from '../saga';
import * as AccountsActions from '../actions';
import * as AccountsModels from '../../../models/accounts';
import AccountsService from '../../../services/accounts.service';

describe('AccountsStore - UnitTestCases', () => {
    describe('AccountsStore - Saga', () => {
        describe('AccountsStore - Saga - Balance', () => {
            it('should call accountsBalanceWorker and dispatch success action', async () => {
                jest.spyOn(AccountsService, 'getBalance').mockImplementation(
                    // @ts-ignore
                    () =>
                        Promise.resolve({
                            data: AccountsModels.nullAccountsBalanceResponseModel,
                        })
                );

                const dispatched = await recordSaga(
                    AccountsWorkers.accountsBalanceWorker,
                    AccountsActions.accountsBalance()
                );

                expect(dispatched).toContainEqual(
                    AccountsActions.accountsBalanceSuccess(
                        AccountsModels.nullAccountsBalanceResponseModel
                    )
                );
            });
            it('should call accountsBalanceWorker and dispatch failure action', async () => {
                jest.spyOn(AccountsService, 'getBalance').mockImplementation(
                    // @ts-ignore
                    () => Promise.reject({})
                );

                const dispatched = await recordSaga(
                    AccountsWorkers.accountsBalanceWorker,
                    AccountsActions.accountsBalance()
                );

                const action = <AccountsActions.ACCOUNTS_BALANCE_FAILURE_TYPE>(
                    (<unknown>dispatched[0])
                );
                expect(action.type).toEqual(
                    AccountsActions.Actions.ACCOUNTS_BALANCE_FAILURE
                );
            });
        });
    });
});
