const { BAD_REQUEST } = require('http-status-codes');

const handleWrongPasswordError = error => {
    return {
        status: BAD_REQUEST,
        payload: {
            message: error.message,
            login: error.login,
            password: error.password,
        },
    };
};

module.exports = handleWrongPasswordError;
