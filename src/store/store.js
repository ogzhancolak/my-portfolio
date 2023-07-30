import { legacy_createStore as createStore } from "redux";
import { reducers } from './reducers/index';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducers,applyMiddleware(thunk));