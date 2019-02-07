import {ConnectedRouter} from 'connected-react-router';
import React, {FunctionComponentElement, memo} from 'react';
import {Provider} from 'react-redux';
import AppHistory from './App.history';
import AppStore from './App.store';
import Page from './shared/Page';
import PageTitle from './shared/PageTitle';

function App (): FunctionComponentElement<null> {
  return (
    <Provider store={AppStore}>
      <ConnectedRouter history={AppHistory}>
        <Page>
          <PageTitle title='Hello world' lead='This is where we build UIs' />
        </Page>
      </ConnectedRouter>
    </Provider>
  );
}

export default memo(App);
