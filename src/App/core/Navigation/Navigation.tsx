import React, {Fragment, PureComponent, ReactElement} from 'react';
import {connect, MapDispatchToPropsNonObject, MapStateToProps} from 'react-redux';
import {Dispatch} from 'redux';
import IAppState from '../../App.state';
import Drawer from '../../shared/Drawer';
import DrawerLink from '../../shared/DrawerLink/DrawerLink';
import Toolbar from '../../shared/Toolbar';
import {closeDrawer, ICloseDrawer, IOpenDrawer, openDrawer} from './Navigation.actions';
import NavigationProps, {INavigationDispatchProps, INavigationOwnProps, INavigationStateProps} from './Navigation.props';
import {INavigationRenderState} from './Navigation.state';

const mapStateToProps: MapStateToProps<INavigationStateProps, INavigationOwnProps, IAppState> =
  ({navigation: {visible}}: IAppState): INavigationStateProps => ({
    visible
  });

const mapDispatchToProps: MapDispatchToPropsNonObject<INavigationDispatchProps, INavigationOwnProps> =
  (dispatch: Dispatch): INavigationDispatchProps => ({
    close (): ICloseDrawer {
      return dispatch(closeDrawer());
    },
    open (): IOpenDrawer {
      return dispatch(openDrawer());
    }
  });

class Navigation extends PureComponent<NavigationProps, INavigationRenderState> {
  constructor (props: NavigationProps) {
    super(props);

    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  public componentWillMount (): void {
    this.setState({
      rendered: false
    });
  }

  public closeDrawer (): void {
    const {close}: NavigationProps = this.props;

    setTimeout(
      (): void => {
        this.setState({
          rendered: false
        });
      },
      250
    );

    close();
  }

  public openDrawer (): void {
    const {open}: NavigationProps = this.props;

    this.setState({
      rendered: true
    });

    setTimeout(
      (): void => {
        open();
      },
      100
    );
  }

  public render (): ReactElement<NavigationProps> {
    const {title, visible}: NavigationProps = this.props;
    const {rendered} = this.state;

    return (
      <Fragment>
        <Toolbar theme='primary' title={title} onClick={this.openDrawer} />

        {
          rendered &&
          <Drawer visible={visible} onClose={this.closeDrawer}>
            <DrawerLink to='/home'>Home</DrawerLink>
            <DrawerLink to='/my-predictions'>My predictions</DrawerLink>
            <DrawerLink to='/results'>Results</DrawerLink>
            <DrawerLink to='/standings'>Standings</DrawerLink>
          </Drawer>
        }
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
