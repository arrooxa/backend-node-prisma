const UserNotFoundError = require('./errors/UserNotFoundError');
const WrongPasswordError = require('./errors/WrongPasswordError');

const handleUserNotFoundError = require('./handlers/handleUserNotFoundError');
const handleWrongPasswordError = require('./handlers/handleWrongPasswordError');
const handleError = require('./handlers/handleError');

const errorHandlersRegistry  = new Map();
errorHandlersRegistry.set(UserNotFoundError.name, handleUserNotFoundError);
errorHandlersRegistry.set(WrongPasswordError.name, handleWrongPasswordError);
errorHandlersRegistry.set(Error.name, handleError);

module.exports = errorHandlersRegistry;
