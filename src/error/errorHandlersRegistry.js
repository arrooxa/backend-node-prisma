const UserNotFoundError = require('src/error/errors/UserNotFoundError');
const WrongPasswordError = require('src/error/errors/WrongPasswordError');

const handleUserNotFoundError = require('src/error/handlers/handleUserNotFoundError');
const handleWrongPasswordError = require('src/error/handlers/handleWrongPasswordError');
const handleError = require('src/error/handlers/handleError');

const errorHandlersRegistry  = new Map();
errorHandlersRegistry.set(UserNotFoundError.name, handleUserNotFoundError);
errorHandlersRegistry.set(WrongPasswordError.name, handleWrongPasswordError);
errorHandlersRegistry.set(Error.name, handleError);

module.exports = errorHandlersRegistry;
