import {ConnectedRouter} from 'connected-react-router';
import React, {Fragment, FunctionComponentElement, memo} from 'react';
import {Provider} from 'react-redux';
import AppHistory from './App.history';
import AppStore from './App.store';
import Navigation from './core/Navigation';
import Footer from './shared/Footer';
import Page from './shared/Page';
import PageTitle from './shared/PageTitle';

function App (): FunctionComponentElement<null> {
  return (
    <Provider store={AppStore}>
      <ConnectedRouter history={AppHistory}>
        <Fragment>
          <Navigation title='BreezeJS' />

          <Page>
            <PageTitle title='Hello world' lead='This is where we build UIs' />
          </Page>

          <Footer name='BreezeJS' />
        </Fragment>
      </ConnectedRouter>
    </Provider>
  );
}

export default memo(App);
