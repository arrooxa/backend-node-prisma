class UserNotFoundError extends Error {
    constructor(userId) {
        super(`User with id ${userId} not found`);
    }
}

module.exports = UserNotFoundError;
