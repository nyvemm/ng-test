import { Actions, ActionTypes } from './actions';
import {
    nullApiErrorModel,
    ApiErrorModel,
    TransactionsListResponseModel,
    nullTransactionsListResponseModel,
    StatusEnum,
} from '../../models';

export type State = {
    transactions_list_status: StatusEnum;
    transactions_list_error: ApiErrorModel;
    transactions_list: TransactionsListResponseModel;
    transactions_create_status: StatusEnum;
    transactions_create_error: ApiErrorModel;
};

export const initialState: State = {
    transactions_list_status: StatusEnum.IDLE,
    transactions_list_error: nullApiErrorModel,
    transactions_list: nullTransactionsListResponseModel,
    transactions_create_status: StatusEnum.IDLE,
    transactions_create_error: nullApiErrorModel,
};

export default function (
    state = initialState,
    action: ActionTypes | { type: '@@INIT' }
): State {
    switch (action.type) {
        case Actions.TRANSACTIONS_LIST:
            return {
                ...state,
                transactions_list_status: StatusEnum.LOADING,
            };
        case Actions.TRANSACTIONS_LIST_SUCCESS:
            return {
                ...state,
                transactions_list_status: StatusEnum.SUCCESS,
                transactions_list_error: nullApiErrorModel,
                transactions_list: action.payload,
            };
        case Actions.TRANSACTIONS_LIST_FAILURE:
            return {
                ...state,
                transactions_list_status: StatusEnum.FAILURE,
                transactions_list_error: action.payload,
            };
        case Actions.TRANSACTIONS_LIST_RESET:
            return {
                ...state,
                transactions_list_status: StatusEnum.IDLE,
                transactions_list_error: nullApiErrorModel,
            };
        case Actions.TRANSACTIONS_CREATE:
            return {
                ...state,
                transactions_create_status: StatusEnum.LOADING,
            };
        case Actions.TRANSACTIONS_CREATE_SUCCESS:
            return {
                ...state,
                transactions_create_status: StatusEnum.SUCCESS,
                transactions_create_error: nullApiErrorModel,
            };
        case Actions.TRANSACTIONS_CREATE_FAILURE:
            return {
                ...state,
                transactions_create_status: StatusEnum.FAILURE,
                transactions_create_error: action.payload,
            };
        case Actions.TRANSACTIONS_CREATE_RESET:
            return {
                ...state,
                transactions_create_status: StatusEnum.IDLE,
                transactions_create_error: nullApiErrorModel,
            };
        default:
            return state;
    }
}
