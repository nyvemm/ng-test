import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
