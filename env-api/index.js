// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/env1', (req, res) => {
  res.send(`ENV1: ${process.env.ENV1 || 'Not set'}`);
});

app.get('/env2', (req, res) => {
  res.send(`ENV2: ${process.env.ENV2 || 'Not set'}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
