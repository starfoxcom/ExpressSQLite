const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

// Settings
app.set('port', port);
app.set('json spaces', 2);

// Middleware
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parsing JSON
app.use(express.urlencoded({ extended: false })); // Parsing URL encoded data

// Use routes
app.use(require('./routes/index'));
app.use(require('./routes/especialidades'));

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
