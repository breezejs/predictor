import React from 'react';
import {render} from 'react-dom';
import UnstyledList from './UnstyledList';

describe('UnstyledList', (): void => {
  let div: HTMLDivElement;

  beforeEach((): void => {
    div = document.createElement('div');
  });

  it('should compile', (): void => {
    render(<UnstyledList />, div);
  });
});
