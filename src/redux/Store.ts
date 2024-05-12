import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './RootReducer';
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

export const passguardStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, logger)
});

sagaMiddleware.run(rootSaga);

export default passguardStore;