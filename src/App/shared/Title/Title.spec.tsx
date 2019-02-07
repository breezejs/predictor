import React from 'react';
import {render} from 'react-dom';
import Title from './Title';

describe('Title', (): void => {
  let div: HTMLDivElement;
  let text: string;

  beforeEach((): void => {
    div = document.createElement('div');
    text = 'Title text';
  });

  it('should compile', (): void => {
    render(<Title text={text} />, div);
  });
});
