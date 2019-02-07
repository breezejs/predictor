import React, {FunctionComponentElement, memo} from 'react';
import ILeadProps from './Lead.props';

function Lead ({className, text}: ILeadProps): FunctionComponentElement<ILeadProps> {
  return (
    <p {...className} className='lead'>{text}</p>
  );
}

export default memo(Lead);
