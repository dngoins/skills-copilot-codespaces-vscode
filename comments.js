// Create web server
const express = require('express');
const app = express();

// Create a POST route
app.post('/comments', (req, res) => {
  res.send('You sent a POST request');
});

// Create a GET route
app.get('/comments', (req, res) => {
  res.send('You sent a GET request');
});

// Start listening on port 4001
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});