const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const handleError = error => {
    return {
        status: INTERNAL_SERVER_ERROR,
        payload: {
            message: error.message,
        },
    };
};

module.exports = handleError;
