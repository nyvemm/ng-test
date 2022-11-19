import { Actions, ActionTypes } from './actions';
import {
    nullApiErrorModel,
    ApiErrorModel,
    AccountsBalanceResponseModel,
    nullAccountsBalanceResponseModel,
    StatusEnum,
} from '../../models';

export type State = {
    accounts_balance_status: StatusEnum;
    accounts_balance_error: ApiErrorModel;
    accounts_balance: AccountsBalanceResponseModel;
};

export const initialState: State = {
    accounts_balance_status: StatusEnum.IDLE,
    accounts_balance_error: nullApiErrorModel,
    accounts_balance: nullAccountsBalanceResponseModel,
};

export default function (
    state = initialState,
    action: ActionTypes | { type: '@@INIT' }
): State {
    switch (action.type) {
        case Actions.ACCOUNTS_BALANCE:
            return {
                ...state,
                accounts_balance_status: StatusEnum.LOADING,
            };
        case Actions.ACCOUNTS_BALANCE_SUCCESS:
            return {
                ...state,
                accounts_balance_status: StatusEnum.SUCCESS,
                accounts_balance_error: nullApiErrorModel,
                accounts_balance: action.payload,
            };
        case Actions.ACCOUNTS_BALANCE_FAILURE:
            return {
                ...state,
                accounts_balance_status: StatusEnum.FAILURE,
                accounts_balance_error: action.payload,
            };
        case Actions.ACCOUNTS_BALANCE_RESET:
            return {
                ...state,
                accounts_balance_status: StatusEnum.IDLE,
                accounts_balance_error: nullApiErrorModel,
            };
        default:
            return state;
    }
}
