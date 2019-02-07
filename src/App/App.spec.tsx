import React from 'react';
import {render} from 'react-dom';
import App from './App';

describe('App', (): void => {
  let div: HTMLDivElement;

  beforeEach((): void => {
    div = document.createElement('div');
  });

  it('should compile', (): void => {
    render(<App />, div);
  });
});
