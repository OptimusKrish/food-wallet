const express = require('express');
const app = express();
const router = require('./router.js');

// Routes - API routes
app.get('/auth', router.auth);

// Start the server
// TCP
app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

// Track for uncaught process errors
process.on('uncaughtException', (err) => {
  if (err.errno === 'EADDRINUSE') {
    process.exit(1);
  }
  console.log(err);
});
