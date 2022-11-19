export enum Actions {
    TOGGLE_HIDE_VALUES = 'TOGGLE_HIDE_VALUES',
    OPEN_TRANSACTIONS_MODAL = 'OPEN_TRANSACTIONS_MODAL',
    CLOSE_TRANSACTIONS_MODAL = 'CLOSE_TRANSACTIONS_MODAL',
}

export type TOGGLE_HIDE_VALUES_TYPE = {
    type: Actions.TOGGLE_HIDE_VALUES;
};

export type OPEN_TRANSACTIONS_MODAL_TYPE = {
    type: Actions.OPEN_TRANSACTIONS_MODAL;
};

export type CLOSE_TRANSACTIONS_MODAL_TYPE = {
    type: Actions.CLOSE_TRANSACTIONS_MODAL;
};

export const toggleHideValues = (): TOGGLE_HIDE_VALUES_TYPE => ({
    type: Actions.TOGGLE_HIDE_VALUES,
});

export const openTransactionsModal = (): OPEN_TRANSACTIONS_MODAL_TYPE => ({
    type: Actions.OPEN_TRANSACTIONS_MODAL,
});

export const closeTransactionsModal = (): CLOSE_TRANSACTIONS_MODAL_TYPE => ({
    type: Actions.CLOSE_TRANSACTIONS_MODAL,
});

export type ActionTypes =
    | TOGGLE_HIDE_VALUES_TYPE
    | OPEN_TRANSACTIONS_MODAL_TYPE
    | CLOSE_TRANSACTIONS_MODAL_TYPE;
