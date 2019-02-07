import React from 'react';
import {render} from 'react-dom';
import Lead from './Lead';

describe('Lead', (): void => {
  let div: HTMLDivElement;
  let text: string;

  beforeEach((): void => {
    div = document.createElement('div');
    text = 'Lead text';
  });

  it('should compile', (): void => {
    render(<Lead text={text} />, div);
  });
});
