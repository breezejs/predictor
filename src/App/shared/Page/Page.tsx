import React, {FunctionComponentElement, memo} from 'react';
import {stylesUtility} from '../Styles';
import IPageProps from './Page.props';
import './Page.scss';

function Page ({children, className}: IPageProps): FunctionComponentElement<IPageProps> {
  return (
    <div className='page'>
      <main className={stylesUtility('container-fluid', className)}>
        {children}
      </main>
    </div>
  );
}

export default memo(Page);
