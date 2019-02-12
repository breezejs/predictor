export interface INavigationDispatchProps {
  close: (() => void);
  open: (() => void);
}

export interface INavigationOwnProps {
  title: string;
}

export interface INavigationStateProps {
  visible: boolean;
}

export type NavigationProps = INavigationStateProps & INavigationOwnProps & INavigationDispatchProps;
