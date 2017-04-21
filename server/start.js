const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app
  .use(bodyParser.urlencoded({ extended: true }))

  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

  .listen(3000, () => {
    console.log('listening on port 3000')
  })
