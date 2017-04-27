import path from 'path';
import { Server } from 'http';
const express = require('express');
import React from 'react'
import routes from './routes'
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const app = new express();
const server = new Server(app);

app.use(express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  match(
    { routes, location: req.url},
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
