// Create web server
// Usage: node comments.js
// =============================================================================

// -----------------------------------------------------------------------------
// Module dependencies
// -----------------------------------------------------------------------------
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------
// Set port
app.set('port', (process.env.PORT || 5000));

// Configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------
// GET /comments
app.get('/comments', function(req, res) {
  res.json([
    { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
    { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' }
  ]);
});

// POST /comments
app.post('/comments', function(req, res) {
  console.log(req.body);
  res.send('POST request to the homepage');
});

// -----------------------------------------------------------------------------
// Create web server
// -----------------------------------------------------------------------------
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});