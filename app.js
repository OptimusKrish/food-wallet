const express = require('express');
const app = express();
const router = require('./router.js');

// Routes - API routes
app.get('/auth', router.auth);
// Routes - API routes
app.get('*', router.default);

// Start the server
// TCP
app.listen(8000, () => {
  console.log(`Listening on port 8000`);
});

// Track for uncaught process errors
process.on('uncaughtException', (err) => {
  if (err.errno === 'EADDRINUSE') {
    process.exit(1);
  }
  console.log(err);
});
