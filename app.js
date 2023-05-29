const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan');
const logger = require('./logger');
const swaggerUi = require('swagger-ui-express');
 const bodyParser = require('body-parser')
const morgan = require('morgan')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

const app = express();
app.use((req, res, next) => {
  //origin, headers, methods
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
      res.status(200).send()
  }
  next()
})
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello, world!' });
});
app.get('/', (req, res) => {
  res.send('Hello World');
});


logger.error("Hello, Winston logger, this error!");
logger.warn("Hello, Winston logger, this warning!");
logger.info("Hello, Winston logger, this info!");
logger.debug("Hello, Winston logger, this debug!");
logger.verbose("Hello, Winston logger, this verbose!")
logger.silly("Hello, Winston logger, this silly!")

app.listen(PORT, HOST, () => {
  logger.info(`Running oyvbjn http://localhost:8080`);
});