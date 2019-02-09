import React from 'react';
import {render} from 'react-dom';
import Footer from './Footer';

describe('Footer', (): void => {
  let div: HTMLDivElement;
  let name: string;

  beforeEach((): void => {
    div = document.createElement('div');
    name = 'footer';
  });

  it('should compile', (): void => {
    render(<Footer name={name} />, div);
  });
});
