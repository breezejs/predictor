import {createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AppHistory} from './App.history';
import AppReducers from './App.reducers';

export const AppStore: Store = createStore(
  AppReducers(AppHistory),
  composeWithDevTools()
);
