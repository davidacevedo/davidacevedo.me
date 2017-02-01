import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from 'containers/App';
import ComingSoon from 'components/ComingSoon';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ComingSoon} />

    <Redirect from="*" to="/" />
  </Route>
)