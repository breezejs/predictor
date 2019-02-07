import React from 'react';
import {render} from 'react-dom';
import Hamburger from './Hamburger';

describe('Hamburger', (): void => {
  let div: HTMLDivElement;
  let label: string;
  let onClick: jest.Mock;

  beforeEach((): void => {
    div = document.createElement('div');
    label = 'Hamburger label';
    onClick = jest.fn();
  });

  it('should compile', (): void => {
    render(<Hamburger label={label} onClick={onClick} />, div);
  });
});
