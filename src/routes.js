import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from 'containers/App';
import About from 'components/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />

    <Redirect from="*" to="/" />
  </Route>
)