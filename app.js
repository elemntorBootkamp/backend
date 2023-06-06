const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const morgan = require('morgan');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

const app = express();
app.use(body_parser.json());
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
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello, world!"});
});
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST, () => {
    console.log('Running on http://localhost:8080');
});
