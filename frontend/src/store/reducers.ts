import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import { reducer as users } from './user';
import { reducer as ui } from './ui';
import { reducer as accounts } from './accounts';
import { reducer as transactions } from './transactions';

const persistBaseConfig = {
    storage: sessionStorage,
};

const persistConfigUser = {
    ...persistBaseConfig,
    key: 'user',
    whitelist: ['user_login', 'user_login_status', 'user_login_error'],
};

const persistConfigUi = {
    ...persistBaseConfig,
    key: 'ui',
    blacklist: ['transactions_modal_open'],
};

export const reducers = {
    users: persistReducer(persistConfigUser, users),
    ui: persistReducer(persistConfigUi, ui),
    accounts,
    transactions,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;

export type StateType = ReturnType<typeof rootReducer>;
