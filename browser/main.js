import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import render from 'react-dom'

import SearchBar from './components/searchBar'

render (
  <Router history={browserHistory}>
    <Route path="/" component ={SearchBar} />
  </Router>,
  document.getElementById('main')
)
