const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://localhost:8080`);
});