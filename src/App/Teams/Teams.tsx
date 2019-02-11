import React, {FunctionComponentElement, memo} from 'react';
import PageTitle from '../shared/PageTitle';

function Teams (): FunctionComponentElement<null> {
  return (
    <PageTitle title='Teams' />
  );
}

export default memo(Teams);
