const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan');
const logger = require('./logger');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
const router=require('./Routes/router')

//logger
logger.error("Hello, Winston logger, this error!");
logger.warn("Hello, Winston logger, this warning!");
logger.info("Hello, Winston logger, this info!");
logger.debug("Hello, Winston logger, this debug!");
logger.verbose("Hello, Winston logger, this verbose!")
logger.silly("Hello, Winston logger, this silly!")
// Constants
const PORT = 8090;
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
app.use('/api/',router);


app.get('/', (req, res) => {
  res.send('Hello World');
  logger.info("hi logger!!!")
  
});




app.use(
  '/api',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.listen(PORT, HOST, () => {
  logger.info(`Running in http://localhost:8090/api`);
});
