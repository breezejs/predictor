import React from 'react';
import {render} from 'react-dom';
import PageTitle from './PageTitle';

describe('PageTitle', (): void => {
  let div: HTMLDivElement;
  let title: string;
  let lead: string;

  beforeEach((): void => {
    div = document.createElement('div');
    title = 'Page title';
    lead = 'Some kind of introductory text';
  });

  it('should compile without lead text', (): void => {
    render(<PageTitle title={title} />, div);
  });

  it('should compile with lead text', (): void => {
    render(<PageTitle title={title} lead={lead} />, div);
  });
});
