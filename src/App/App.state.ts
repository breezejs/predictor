import {RouterState} from 'connected-react-router';
import INavigationState from './core/Navigation/Navigation.state';

export default interface IAppState {
  navigation: INavigationState;
  router: RouterState;
}
