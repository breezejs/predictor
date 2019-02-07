import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {FunctionComponentElement, memo} from 'react';
import {stylesUtility} from '../Styles';
import IHamburgerProps from './Hamburger.props';
import './Hamburger.scss';

function Hamburger ({className, label, onClick}: IHamburgerProps): FunctionComponentElement<IHamburgerProps> {
  return (
    <button className={stylesUtility('hamburger', className)} aria-label={label} onClick={onClick}>
      <FontAwesomeIcon icon={faBars}/>
    </button>
  );
}

export default memo(Hamburger);
