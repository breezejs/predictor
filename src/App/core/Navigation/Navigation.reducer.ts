import {NavigationActions, NavigationActionTypes} from './Navigation.actions';
import {INavigationState} from './Navigation.state';

export const initialState: INavigationState = {
  visible: false
};

export function navigationReducer (state: INavigationState = initialState, {type}: NavigationActions): INavigationState {
  switch (type) {
  case NavigationActionTypes.CloseDrawer:
    return {
      visible: false
    };
  case NavigationActionTypes.OpenDrawer:
    return {
      visible: true
    };
  default:
    return state;
  }
}
