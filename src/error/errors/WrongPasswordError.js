class WrongPasswordError extends Error {
    constructor(login, password) {
        super(`Password ${password} is not correct for login ${login}`);
    }
}

module.exports = WrongPasswordError;
