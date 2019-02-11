import React, {FunctionComponentElement} from 'react';
import PageTitle from '../shared/PageTitle';

function Home (): FunctionComponentElement<null> {
  return (
    <PageTitle title='Predictor' lead='Welcome to the Predictor app' />
  );
}

export default Home;
