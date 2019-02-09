import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {FunctionComponentElement, memo} from 'react';
import styled, {StyledComponent} from 'styled-components';
import IHamburgerProps from './Hamburger.props';

const Button: StyledComponent<'button', object> = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 20px;
  height: 40px;
  line-height: 1;
  padding: 0;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  width: 40px;

  :focus {
    opacity: .4;
    outline: 0;
  }
`;

function Hamburger ({className, label, onClick}: IHamburgerProps): FunctionComponentElement<IHamburgerProps> {
  return (
    <Button className={className} aria-label={label} onClick={onClick}>
      <FontAwesomeIcon icon={faBars}/>
    </Button>
  );
}

export default memo(Hamburger);
