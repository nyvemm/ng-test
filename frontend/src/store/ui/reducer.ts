import { Actions, ActionTypes } from './actions';

export type State = {
    values_hidden: boolean;
    transactions_modal_open: boolean;
};

export const initialState: State = {
    values_hidden: false,
    transactions_modal_open: false,
};

export default function (
    state = initialState,
    action: ActionTypes | { type: '@@INIT' }
): State {
    switch (action.type) {
        case Actions.TOGGLE_HIDE_VALUES:
            return {
                ...state,
                values_hidden: !state.values_hidden,
            };
        case Actions.OPEN_TRANSACTIONS_MODAL:
            return {
                ...state,
                transactions_modal_open: true,
            };
        case Actions.CLOSE_TRANSACTIONS_MODAL:
            return {
                ...state,
                transactions_modal_open: false,
            };
        default:
            return state;
    }
}
