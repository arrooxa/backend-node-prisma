const errorHandlersRegistry = require('../error/errorHandlersRegistry');
const logger = require('../config/logger');

module.exports.errorTranslator = (err, req, res) => {
    logger.error(err.message);
    const handler = errorHandlersRegistry.get(err.constructor.name) ?? errorHandlersRegistry.get(Error.name);
    const { status, payload } = handler(err);
    res.status(status).send(payload);
};
