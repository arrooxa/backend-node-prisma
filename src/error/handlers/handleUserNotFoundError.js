const { BAD_REQUEST } = require("http-status-codes");

const handleUserNotFoundError = (error) => {
    return {
        status: BAD_REQUEST,
        payload: {
            message: error.message,
            userId: error.userId,
        },
    };
};

module.exports = handleUserNotFoundError;
