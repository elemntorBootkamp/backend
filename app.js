const express = require('express');

// const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./logger');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
const router = require('./Routes/router');
const routerWebsite=require('./Routes/website')

//logger
logger.error('Hello, Winston logger, this error!');
logger.warn('Hello, Winston logger, this warning!');
logger.info('Hello, Winston logger, this info!');
logger.debug('Hello, Winston logger, this debug!');
logger.verbose('Hello, Winston logger, this verbose!');
logger.silly('Hello, Winston logger, this silly!');
const cors = require('cors');
const body_parser = require('body-parser');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';
// App
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use((req, res, next) => {
    //origin, headers, methods
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        );
        res.status(200).send();
    }
    next();
});
app.use('/api/', router);
app.use('/website', routerWebsite);

app.get('/', (req, res) => {
    res.send('Hello World');
    logger.info('hi logger!!!');
});
// app.use((req, res, next) => {
//     //origin, headers, methods
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     if (req.method === 'OPTIONS') {
//         res.header(
//             'Access-Control-Allow-Methods',
//             'PUT, POST, PATCH, DELETE, GET'
//         );
//         res.status(200).send();
//     }
//     next();
// });
app.get('/', async (req, res) => {
    try {
        const message = 'Hello World';
        res.send(message);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
// const util = require('util');
// const listenAsync = util.promisify(app.listen).bind(app);
// const startServer = async () => {
//     try {
//         await listenAsync(8090, HOST);
//         // console.log(`Running on http://localhost:8080`);
//     } catch (error) {
//         console.error(error);
//         process.exit(1);
//     }
// };
// startServer();
//npm run prettier

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, HOST, () => {
    logger.info(`Running in http://localhost:8090/api`);
    console.log(`Running in http://localhost:8090/api`);

});
