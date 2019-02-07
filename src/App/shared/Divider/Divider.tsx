import React, {FunctionComponentElement, memo} from 'react';
import IDividerProps from './Divider.props';

function Divider ({className}: IDividerProps): FunctionComponentElement<IDividerProps> {
  return (
    <hr className={className} />
  );
}

export default memo(Divider);
