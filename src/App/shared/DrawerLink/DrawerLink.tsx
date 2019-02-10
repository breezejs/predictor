import React, {FunctionComponentElement, memo} from 'react';
import {Link} from 'react-router-dom';
import styled, {StyledComponent} from 'styled-components';
import IDrawerLinkProps from './DrawerLink.props';

const A: StyledComponent<typeof Link, object> = styled(Link)`
  background-color: transparent;
  color: #212529;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: .5rem 1rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  user-select: none;
  vertical-align: middle;
  width: 100%;

  :hover {
    background-color: #dee2e6;
    color: #212529;
    text-decoration: none;
  }
`;

function DrawerLink ({children, to}: IDrawerLinkProps): FunctionComponentElement<IDrawerLinkProps> {
  return (
    <li>
      <A to={to}>{children}</A>
    </li>
  );
}

export default memo(DrawerLink);
