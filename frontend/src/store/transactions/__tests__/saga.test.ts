import { recordSaga } from '../../../utils/test.utils';
import * as TransactionsWorkers from '../saga';
import * as TransactionsActions from '../actions';
import * as TransactionsModels from '../../../models/transactions';
import TransactionsService from '../../../services/transactions.service';

describe('TransactionStore - UnitTestCases', () => {
    describe('TransactionStore - Saga', () => {
        describe('TransactionStore - Saga - ListTransactions', () => {
            it('should call transactionsListWorker and dispatch success action', async () => {
                jest.spyOn(TransactionsService, 'list').mockImplementation(
                    // @ts-ignore
                    () =>
                        Promise.resolve({
                            data: TransactionsModels.nullTransactionsListResponseModel,
                        })
                );

                const dispatched = await recordSaga(
                    TransactionsWorkers.transactionsListWorker,
                    TransactionsActions.transactionsList(
                        TransactionsModels.nullTransactionsListRequestModel
                    )
                );

                expect(dispatched).toContainEqual(
                    TransactionsActions.transactionsListSuccess(
                        TransactionsModels.nullTransactionsListResponseModel
                    )
                );
            });
            it('should call transactionsListWorker and dispatch failure action', async () => {
                jest.spyOn(TransactionsService, 'list').mockImplementation(
                    // @ts-ignore
                    () => Promise.reject({})
                );

                const dispatched = await recordSaga(
                    TransactionsWorkers.transactionsListWorker,
                    TransactionsActions.transactionsList(
                        TransactionsModels.nullTransactionsListRequestModel
                    )
                );

                const action = <
                    TransactionsActions.TRANSACTIONS_LIST_FAILURE_TYPE
                >(<unknown>dispatched[0]);

                expect(action.type).toEqual(
                    TransactionsActions.Actions.TRANSACTIONS_LIST_FAILURE
                );
            });
        });
        describe('TransactionStore - Saga - CreateTransaction', () => {
            it('should call transactionsCreateWorker and dispatch success action', async () => {
                jest.spyOn(TransactionsService, 'create').mockImplementation(
                    // @ts-ignore
                    () => Promise.resolve({})
                );

                const dispatched = await recordSaga(
                    TransactionsWorkers.transactionsCreateWorker,
                    TransactionsActions.transactionsCreate(
                        TransactionsModels.nullTransactionsCreateRequestModel
                    )
                );

                expect(dispatched).toContainEqual(
                    TransactionsActions.transactionsCreateSuccess()
                );
            });
            it('should call transactionsCreateWorker and dispatch failure action', async () => {
                jest.spyOn(TransactionsService, 'create').mockImplementation(
                    // @ts-ignore
                    () => Promise.reject({})
                );

                const dispatched = await recordSaga(
                    TransactionsWorkers.transactionsCreateWorker,
                    TransactionsActions.transactionsCreate(
                        TransactionsModels.nullTransactionsCreateRequestModel
                    )
                );

                const action = <
                    TransactionsActions.TRANSACTIONS_CREATE_FAILURE_TYPE
                >(<unknown>dispatched[0]);

                expect(action.type).toEqual(
                    TransactionsActions.Actions.TRANSACTIONS_CREATE_FAILURE
                );
            });
        });
    });
});
