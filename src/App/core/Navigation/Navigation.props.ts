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

type NavigationProps = INavigationStateProps & INavigationOwnProps & INavigationDispatchProps;

export default NavigationProps;
