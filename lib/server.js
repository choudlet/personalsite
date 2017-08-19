/* eslint-disable no-console */
const express = require('express');
const config = require('./config');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
