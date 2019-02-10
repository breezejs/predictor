import React, {memo, ReactPortal} from 'react';
import {createPortal} from 'react-dom';
import styled, {css, StyledComponent} from 'styled-components';
import Backdrop from '../Backdrop';
import Divider from '../Divider';
import Toolbar from '../Toolbar';
import IDrawerProps, {IDrawerElementProps} from './Drawer.props';

const Hr: StyledComponent<typeof Divider, object> = styled(Divider)`
  margin: 0;
`;

const List: StyledComponent<'hr', object> = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Overlay: StyledComponent<typeof Backdrop, object, IDrawerElementProps> = styled(Backdrop)<IDrawerElementProps>`
  cursor: pointer;
  opacity: ${({visible}: IDrawerElementProps): string => visible ? '.5' : '0'};
  transition: opacity 225ms cubic-bezier(.4,0,.2,1);
`;

const Panel: StyledComponent<'nav', object, IDrawerElementProps> = styled.nav<IDrawerElementProps>`
  background-color: #f8f9fa;
  bottom: 0;
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
  // TODO: Remove overlay and panel from the DOM
  return createPortal(
    <Wrapper visible={visible} role='presentation'>
      <Overlay visible={visible} onClick={onClose} />

      <Panel visible={visible}>
        <Toolbar theme='secondary' title='Menu' />

        <Hr />

        <List>
          {children}
        </List>
      </Panel>
    </Wrapper>,
    document.body
  );
}

export default memo(Drawer);