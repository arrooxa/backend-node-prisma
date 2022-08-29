const errorHandlersRegistry = require('src/error/errorHandlersRegistry');

module.exports.errorTranslator = (err, req, res) => {
    const handler = errorHandlersRegistry.get(err.constructor.name) ?? errorHandlersRegistry.get(Error.name);
    const { status, payload } = handler(err);
    res.status(status).send(payload);
};
