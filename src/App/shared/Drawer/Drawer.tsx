import React, {memo, ReactPortal} from 'react';
import {createPortal} from 'react-dom';
import styled, {css, StyledComponent} from 'styled-components';
import Backdrop from '../Backdrop';
import Divider from '../Divider';
import Toolbar from '../Toolbar';
import UnstyledList from '../UnstyledList';
import {IDrawerElementProps, IDrawerProps} from './Drawer.props';

const DrawerBackdrop: StyledComponent<typeof Backdrop, object, IDrawerElementProps> = styled(Backdrop)<IDrawerElementProps>`
  cursor: pointer;
  opacity: ${({visible}: IDrawerElementProps): string => visible ? '.5' : '0'};
  transition: opacity 225ms cubic-bezier(.4,0,.2,1);
`;

const DrawerDivider: StyledComponent<typeof Divider, object> = styled(Divider)`
  margin: 0;
`;

const Panel: StyledComponent<'nav', object, IDrawerElementProps> = styled.nav<IDrawerElementProps>`
  background-color: #f8f9fa;
  bottom: 0;
  box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
  left: ${({visible}: IDrawerElementProps): string => visible ? '0' : '-250px'};
  opacity: ${({visible}: IDrawerElementProps): string => visible ? '1' : '0'};
  position: fixed;
  top: 0;
  transition: left 225ms cubic-bezier(0,0,.2,1), opacity 225ms cubic-bezier(.4,0,.2,1);
  width: 250px;
  z-index: 1400;
`;

const Wrapper: StyledComponent<'div', object, IDrawerElementProps> = styled.div<IDrawerElementProps>`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1300;

  ${({visible}: IDrawerElementProps): false | {} => !visible && css`
    transform: translate3d(100%, 0px, 0px);
    transition: transform 0s ease .25s;
  `}
`;

function Drawer ({children, onClose, visible}: IDrawerProps): ReactPortal {
  return createPortal(
    <Wrapper visible={visible} role='presentation'>
      <DrawerBackdrop visible={visible} onClick={onClose} />

      <Panel visible={visible}>
        <Toolbar theme='secondary' title='Menu' />

        <DrawerDivider />

        <UnstyledList onClick={onClose}>
          {children}
        </UnstyledList>
      </Panel>
    </Wrapper>,
    document.body
  );
}

export default memo(Drawer);
