import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import initSagas from './sagas/initSagas';
import thunk from 'redux-thunk';

import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
 key: 'root',
 storage: AsyncStorage,
 whitelist: ['auth'],
 timeout: null
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware, thunk));
export const persistor = persistStore(store);
initSagas(sagaMiddleware);