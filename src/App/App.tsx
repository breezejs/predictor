import {ConnectedRouter} from 'connected-react-router';
import React, {FunctionComponentElement, memo} from 'react';
import {Provider} from 'react-redux';
import AppHistory from './App.history';
import AppStore from './App.store';

function App (): FunctionComponentElement<unknown> {
  return (
    <Provider store={AppStore}>
      <ConnectedRouter history={AppHistory}>
        <h1>Hello world</h1>
      </ConnectedRouter>
    </Provider>
  );
}

export default memo(App);
