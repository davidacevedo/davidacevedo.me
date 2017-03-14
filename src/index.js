import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

let history = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('app')
);
