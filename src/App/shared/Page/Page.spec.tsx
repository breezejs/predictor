import React from 'react';
import {render} from 'react-dom';
import Page from './Page';

describe('Page', (): void => {
  let div: HTMLDivElement;

  beforeEach((): void => {
    div = document.createElement('div');
  });

  it('should compile', (): void => {
    render(<Page>Hello world</Page>, div);
  });
});
