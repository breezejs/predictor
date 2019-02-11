import React, {Fragment, FunctionComponentElement, memo} from 'react';
import PageTitle from '../shared/PageTitle';

function NotFound (): FunctionComponentElement<null> {
  return (
    <Fragment>
      <PageTitle title='Page not found' lead='The page you are looking for was not found' />

      <p>It seems the item or page you're looking for does not exist or has been moved.</p>
    </Fragment>
  );
}

export default memo(NotFound);
