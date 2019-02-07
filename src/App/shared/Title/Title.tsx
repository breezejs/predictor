import React, {FunctionComponentElement, memo} from 'react';
import ITitleProps from './Title.props';

function Title ({className, text}: ITitleProps): FunctionComponentElement<ITitleProps> {
  return (
    <h1 {...className}>{text}</h1>
  );
}

export default memo(Title);
