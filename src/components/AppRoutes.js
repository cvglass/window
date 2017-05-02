import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}


// const React = require('react');
// const reactRouter = require('react-router');
// const Router = reactRouter.Router;
// const browserHistory = reactRouter.browserHistory
// import routes from '../routes';
