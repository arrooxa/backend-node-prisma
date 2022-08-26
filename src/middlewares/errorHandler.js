const errorHandlersRegistry = require('src/error/errorHandlersRegistry');

module.exports.errorHandler = (err, req, res) => {
    const handler = errorHandlersRegistry.get(err.constructor.name);
    const { status, payload } = handler(err);
    res.status(status).send(payload);
};
