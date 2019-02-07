import React, {FunctionComponentElement, memo} from 'react';
import {stylesUtility} from '../Styles';
import ILeadProps from './Lead.props';

function Lead ({className, text}: ILeadProps): FunctionComponentElement<ILeadProps> {
  return (
    <p className={stylesUtility('lead', className)}>{text}</p>
  );
}

export default memo(Lead);
