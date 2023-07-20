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
import protectedRout from './Routes/protectedRoute.js';
import Keycloak from 'keycloak-connect';
import session from 'express-session';
const memoryStore = new session.MemoryStore();

const app = express();
//keycloak
const keycloakConfig = {
    serverUrl: 'http://localhost:8080/',
    realm: 'keycloak-react-auth',
    clientId: 'Node-auth',
};
app.use(
    session({
        secret: 'mySecret',
        resave: false,
        saveUninitialized: true,
        store: memoryStore,
    })
);
// const keycloakMiddleware = new Keycloak({ idpHint: 'SSO', cookies: true });
const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
app.use(keycloak.middleware());
//user id
const addUserIdMiddleware = (req, res, next) => {
    const userId = req.headers.userid;
    console.log('idToNode ' + userId);
    req.userId = userId;
    next();
};
app.use(addUserIdMiddleware);

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

dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
// app.use('/', router);
app.use(keycloak.protect());
app.use('/website', websiteRout);
app.use('/cpu', cpuRout);
app.use('/protected', protectedRout);

dotenv.config();
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req, res, next) => {
    //origin, headers, methods
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, userid'
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
//

// app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, HOST, () => {
    logger.info('Running in http://localhost:8090/api');
    logger.info('hh');

    console.log('Running in http://localhost:8090/protected');
});
