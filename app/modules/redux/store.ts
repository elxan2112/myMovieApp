import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducer } from './combineReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, combineReducer);


export const store = createStore(
    persistedReducer,
    compose(composeWithDevTools(applyMiddleware(...[sagaMiddleware])))
);
export const persisStore = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
