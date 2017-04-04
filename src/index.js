import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
// Don't register service worker in production
// import registerServiceWorker from 'utils/registerServiceWorker';
import routes from './routes';

// registerServiceWorker();
let history = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('app')
);
