'use strict'

const path = require('path');
const Server = require('http').Server;
const express = require('express');
const React = require('react');
const routes = require('./routes');
const renderToString = require('react-dom/server');
const reactRouter = require('react-router');
const match = reactRouter.match;
const RouterContext = reactRouter.RouterContext

const app = new express();
const server = new Server(app);

app.use(express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  match(
    {routes: routes, location: req.url},
    (err, redirectionLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message)
      }

      if (redirectionLocation) {
        return res.redirect(302, redirectionLocation.pathname + redirectionLocation.search)
      }

      return res.render('index')
    }
  )
})

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
})
