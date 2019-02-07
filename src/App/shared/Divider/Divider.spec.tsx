import React from 'react';
import {render} from 'react-dom';
import Divider from './Divider';

describe('Divider', (): void => {
  let div: HTMLDivElement;

  beforeEach((): void => {
    div = document.createElement('div');
  });

  it('should compile', (): void => {
    render(<Divider />, div);
  });
});
