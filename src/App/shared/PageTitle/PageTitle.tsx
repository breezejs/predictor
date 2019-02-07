import React, {FunctionComponentElement, memo} from 'react';
import Divider from '../Divider';
import Lead from '../Lead';
import Title from '../Title';
import IPageTitleProps from './PageTitle.props';
import './PageTitle.scss';

function PageTitle ({lead, title}: IPageTitleProps): FunctionComponentElement<IPageTitleProps> {
  return (
    <header className='page-title'>
      <Title className='page-title__title' text={title} />

      {
        lead &&
        <React.Fragment>
          <Divider className='page-title__hr' />

          <Lead className='page-title__lead' text={lead} />
        </React.Fragment>
      }
    </header>
  );
}

export default memo(PageTitle);
