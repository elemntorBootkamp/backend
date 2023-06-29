import { createLogger, transports } from 'winston';

const logger = createLogger({
    transports: [
        // new transports.Console(),
        new transports.File({ filename: 'app.log' }),
    ],
});

export default logger;
