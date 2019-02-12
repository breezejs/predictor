import {ConnectedRouter} from 'connected-react-router';
import React, {Fragment, FunctionComponentElement, memo} from 'react';
import DocumentTitle from 'react-document-title';
import {Provider} from 'react-redux';
import {AppHistory} from './App.history';
import AppRouting from './App.routing';
import {AppStore} from './App.store';
import Navigation from './core/Navigation';
import Footer from './shared/Footer';
import Page from './shared/Page';

function App (): FunctionComponentElement<null> {
  return (
    <Provider store={AppStore}>
      <ConnectedRouter history={AppHistory}>
        <Fragment>
          <Navigation title='Predictor' />

          <Page>
            <DocumentTitle title='Predictor'>
              <AppRouting />
            </DocumentTitle>
          </Page>

          <Footer name='BreezeJS' />
        </Fragment>
      </ConnectedRouter>
    </Provider>
  );
}

export default memo(App);
