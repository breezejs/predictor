import {RouterState} from 'connected-react-router';
import {INavigationState} from './core/Navigation';

export interface IAppState {
  navigation: INavigationState;
  router: RouterState;
}
