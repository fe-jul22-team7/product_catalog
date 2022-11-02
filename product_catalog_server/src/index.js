'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.port || 8080;


app.get('/', (req, res) => {

  res.statusCode = 200;

  res.send('Server');
});

app.listen(PORT);