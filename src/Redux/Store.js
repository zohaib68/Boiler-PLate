import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import thunk from "redux-thunk";

import { rootReducer } from "./CombineReducers";

// NOTE: SWITH FROM LOCALSTROAGE TO SESSION STROAGE

const persistConfig = {
  key: "root",
  storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
