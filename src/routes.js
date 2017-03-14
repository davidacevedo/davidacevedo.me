import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from 'containers/App';
import About from 'components/About';
import Photosphere from 'components/Photosphere';

export default (
  <Route path="/" component={App}>
    <Route path="/test" component={Photosphere} />
    <IndexRoute component={About} />

    <Redirect from="*" to="/" />
  </Route>
)