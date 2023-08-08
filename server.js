'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  let env = {}
  let env_prefix = "DEMO";

  Object.keys(process.env).forEach(function(key) {
    if (key.startsWith(env_prefix)) {
      env[key] = process.env[key]
    }
  });
  // let env = process.env;

  res.render('index', { 
    title: 'Hello World', 
    message: `Hello there! Displaying environment variables start with ${env_prefix}`, 
    env: env 
  })
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT} RUN_TIME:${process.env.RUN_TIME}`);
}); 