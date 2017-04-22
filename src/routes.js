import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from 'containers/App';
import Me from 'components/Me';
import Photosphere from 'components/Photosphere';

export default (
  <Route path="/" component={App}>
    <Route path="/test" component={Photosphere} />
    <IndexRoute component={Me} />

    <Redirect from="*" to="/" />
  </Route>
)