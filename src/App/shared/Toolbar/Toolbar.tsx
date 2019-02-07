import React, {FunctionComponentElement, memo} from 'react';
import Hamburger from '../Hamburger';
import Title from '../Title';
import IToolbarProps, {ToolbarTheme} from './Toolbar.props';
import './Toolbar.scss';

function Toolbar ({onClick, theme, title}: IToolbarProps): FunctionComponentElement<IToolbarProps> {
  function hamburgerClass (input: ToolbarTheme): string {
    switch (input) {
    case 'secondary':
      return 'toolbar__hamburger--secondary';
    default:
      return 'toolbar__hamburger--primary';
    }
  }

  function headerClass (input: ToolbarTheme): string {
    switch (input) {
    case 'secondary':
      return 'toolbar toolbar--secondary';
    default:
      return 'toolbar toolbar--primary';
    }
  }

  function titleClass (input: ToolbarTheme): string {
    switch (input) {
    case 'secondary':
      return 'toolbar__title toolbar__title--secondary';
    default:
      return 'toolbar__title toolbar__title--primary';
    }
  }

  return (
    <header className={headerClass(theme)}>
      {
        onClick &&
        <Hamburger className={hamburgerClass(theme)} label='Show drawer' onClick={onClick} />
      }
      <Title className={titleClass(theme)} text={title} />
    </header>
  );
}

export default memo(Toolbar);
