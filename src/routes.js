import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from 'containers/App';
import Hello from 'components/Hello';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Hello} />

    <Redirect from="*" to="/" />
  </Route>
)