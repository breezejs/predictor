import React from 'react';
import {render} from 'react-dom';
import Toolbar from './Toolbar';

describe('Toolbar', (): void => {
  let div: HTMLDivElement;
  let title: string;
  let onClick: jest.Mock;

  beforeEach((): void => {
    div = document.createElement('div');
    title = 'Toolbar title';
    onClick = jest.fn();
  });

  it('should compile', (): void => {
    render(<Toolbar title={title} theme='primary' onClick={onClick} />, div);
  });
});
