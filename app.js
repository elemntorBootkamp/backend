import express from 'express';
import bodyParser from 'body-parser';
import logger from './logger.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };
import router from './Routes/router.js';
import morgan from 'morgan';
import cors from 'cors';
import websiteRout from './Routes/websiteRouter.js';

//logger
logger.error('Hello, Winston logger, this error!');
logger.warn('Hello, Winston logger, this warning!');
logger.info('Hello, Winston logger, this info!');
logger.debug('Hello, Winston logger, this debug!');
logger.verbose('Hello, Winston logger, this verbose!');
logger.silly('Hello, Winston logger, this silly!');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/', router);
app.use('/website', websiteRout);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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

app.get('/', (req, res) => {
    res.send('Hello World');
    logger.info('hi logger!!!');
});

app.get('/', async (req, res) => {
    try {
        const message = 'Hello World';
        res.send(message);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, HOST, () => {
    logger.info('Running in http://localhost:8090/api');
    console.log('Running in http://localhost:8090/api');
});
