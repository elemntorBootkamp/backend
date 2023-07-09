import express from 'express';
import bodyParser from 'body-parser';
import logger from './logger.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: 'json' };
import morgan, { token } from 'morgan';
import cors from 'cors';
import router from './Routes/router.js';
import websiteRout from './Routes/websiteRouter.js';
import cpuRout from './Routes/cpuRouter.js';
import jwt from 'jsonwebtoken';
import Keycloak from 'keycloak-connect';
const app = express();

const keycloakConfig = {
    url: 'http://localhost:8080/',
	realm: 'REACT',
	clientId: 'node-app',
    bearerOnly: false,
};
const keycloak = new Keycloak({}, keycloakConfig);
app.use(keycloak.middleware());

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

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
// app.use('/', router);
app.use('/website', websiteRout);
app.use('/cpu', cpuRout);
// app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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
app.use((req, res, next) => {
    console.log(req.headers.authorization);
    next();
  });
//keycloak
app.get('/protected',keycloak.protect(), (req, res) => {
    
    res.send('hhhhhhhhhhh')
    try{
    const { sub, email } = req.kauth.grant.access_token.content;
    res.send(`Protected route accessed by user ${sub} (${email})`);
    console.log(`Protected route accessed by user ${sub} (${email})`)
    }
    catch{
        console.log("eeeeerror");
    }
});
// Unprotected route
app.get('/unprotected', (req, res) => {
    res.send('Unprotected route');
   
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
//


    // app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.listen(PORT, HOST, () => {
        logger.info('Running in http://localhost:8090/api');
        logger.info('hh');

        console.log('Running in http://localhost:8090/protected');


    });
