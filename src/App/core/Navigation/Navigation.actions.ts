export enum NavigationActionTypes {
  CloseDrawer = '[Navigation] Close drawer',
  OpenDrawer = '[Navigation] Open drawer'
}

export interface ICloseDrawer {
  type: NavigationActionTypes.CloseDrawer;
}

export interface IOpenDrawer {
  type: NavigationActionTypes.OpenDrawer;
}

export function closeDrawer (): ICloseDrawer {
  return {
    type: NavigationActionTypes.CloseDrawer
  };
}

export function openDrawer (): IOpenDrawer {
  return {
    type: NavigationActionTypes.OpenDrawer
  };
}

export type NavigationActions =
  | ICloseDrawer
  | IOpenDrawer;
