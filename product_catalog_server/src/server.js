'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./data'));

app.get('/products', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  fs.readFile('./data/phones.json', 'utf-8', (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      return;
    }
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started http://localhost:${PORT}/`);
});