import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import {combineReducers, Reducer} from 'redux';
import IAppState from './App.state';

const AppReducers: Function = (history: History): Reducer<IAppState> => combineReducers({
  router: connectRouter(history)
});

export default AppReducers;
