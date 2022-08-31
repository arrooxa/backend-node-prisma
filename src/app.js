const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const httpStatus = require('http-status');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express')

const routes = require('./routes/v1');
const config = require('./config/env.config');
const { rateLimiter } = require('./middlewares/rateLimiter');
const { errorTranslator } = require('./middlewares/errorTranslator')
const swaggerDocument = require("./swagger-output.json");


const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// Swagger configuration
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handler
app.use(errorTranslator);

// TODO: jwt authentication

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
    app.use('/v1/auth', rateLimiter);
}

// v1 api routes
app.use('/v1', routes);

// TODO: Change ApiError to our error handler
// send back a 404 error for any unknown api request
// app.use((req, res, next) => {
//     next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
// });

// TODO: convert error to ApiError, if needed
// app.use(errorConverter);

// TODO: handle error
// app.use(errorHandler);

module.exports = app;