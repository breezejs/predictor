import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import {combineReducers, Reducer} from 'redux';
import IAppState from './App.state';
import navigationReducer from './core/Navigation/Navigation.reducer';

const AppReducers: Function = (history: History): Reducer<IAppState> => combineReducers({
  navigation: navigationReducer,
  router: connectRouter(history)
});

export default AppReducers;
