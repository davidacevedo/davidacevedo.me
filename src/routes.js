import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from 'app/@app/App';
import Me from 'app/home/Home';
import Projects from 'app/projects/Projects';
import Photosphere from 'app/photosphere/Photosphere';

export default (
  <Route path="/" component={App}>
    <Route path="/photosphere" component={Photosphere} />
    <Route path="/projects" component={Projects} />
    <IndexRoute component={Me} />

    <Redirect from="*" to="/" />
  </Route>
)