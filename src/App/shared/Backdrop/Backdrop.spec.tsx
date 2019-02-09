import React from 'react';
import {render} from 'react-dom';
import Backdrop from './Backdrop';

describe('Backdrop', (): void => {
  let div: HTMLDivElement;

  beforeEach((): void => {
    div = document.createElement('div');
  });

  it('should compile', (): void => {
    render(<Backdrop />, div);
  });
});
