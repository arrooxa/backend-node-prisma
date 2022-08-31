const errorHandler = (errorCode, errorMessage, res) => {
    if (!errorCode) {
        errorCode = 500;
    }

    res.status(errorCode).json({
        errors: [
            {
                status: errorCode,
                title: errorMessage,
            },
        ],
    });
};

module.exports = errorHandler;
