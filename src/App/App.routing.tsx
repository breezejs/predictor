import React, {FunctionComponentElement} from 'react';
import {Route, Switch} from 'react-router';
import Home from './Home';
import NotFound from './NotFound';
import Teams from './Teams';

function AppRouting (): FunctionComponentElement<null> {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/teams' component={Teams} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default AppRouting;
