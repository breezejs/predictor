import {faFutbol, faHome, faListOl, faListUl, faTshirt} from '@fortawesome/free-solid-svg-icons';
import React, {Fragment, FunctionComponentElement, memo, useState} from 'react';
import {connect, MapDispatchToPropsNonObject, MapStateToProps} from 'react-redux';
import {Dispatch} from 'redux';
import IAppState from '../../App.state';
import Drawer from '../../shared/Drawer';
import DrawerIcon from '../../shared/DrawerIcon';
import DrawerLink from '../../shared/DrawerLink/DrawerLink';
import Toolbar from '../../shared/Toolbar';
import {closeDrawer, ICloseDrawer, IOpenDrawer, openDrawer} from './Navigation.actions';
import NavigationProps, {INavigationDispatchProps, INavigationOwnProps, INavigationStateProps} from './Navigation.props';

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

function Navigation ({close, open, title, visible}: NavigationProps): FunctionComponentElement<NavigationProps> {
  const [rendered, setRender] = useState(false);

  async function closeDrawerAction (): Promise<void> {
    close();

    await timer(250);

    setRender(false);
  }

  async function openDrawerAction (): Promise<void> {
    setRender(true);

    await timer(100);

    open();
  }

  async function timer (ms: number): Promise<void> {
    return new Promise((resolve: Function): void => {
      setTimeout(
        (): void => {
          resolve();
        },
        ms
      );
    });
  }

  return (
    <Fragment>
      <Toolbar theme='primary' title={title} onClick={openDrawerAction} />

      {
        rendered &&
        <Drawer visible={visible} onClose={closeDrawerAction}>
          <DrawerLink to='/home'>
            <DrawerIcon icon={faHome} /> Home
          </DrawerLink>
          <DrawerLink to='/my-predictions'>
            <DrawerIcon icon={faListUl} /> My predictions
          </DrawerLink>
          <DrawerLink to='/results'>
            <DrawerIcon icon={faFutbol} /> Results
          </DrawerLink>
          <DrawerLink to='/standings'>
            <DrawerIcon icon={faListOl} /> Standings
          </DrawerLink>
          <DrawerLink to='/teams'>
            <DrawerIcon icon={faTshirt} /> Teams
          </DrawerLink>
        </Drawer>
      }
    </Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Navigation));
