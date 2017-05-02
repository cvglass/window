// const React = require('react');
// // const reactRouter = require('react-router');
// const Route = require('react-router').Route;

// //components
// const Home = require('./components/home');

// class routes extends React.Component {
//   render() {
//     return(
//       <Route path="/" component={Home} />
//     )
//   }
// }

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './components/home'
// import Layout from './components/Layout';
// import IndexPage from './components/IndexPage';
// import AthletePage from './components/AthletePage';
// import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Home}>
  </Route>
);

export default routes;
