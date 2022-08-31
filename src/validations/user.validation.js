const Joi = require("joi");

const password = (value, helpers) => {
    if (value.length < 8) {
        return helpers.message("senha precisa ter ao menos 8 carácteres.");
    }
    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        return helpers.message(
            "senha precisa ter ao menos 1 letra e 1 número."
        );
    }
    return value;
};

const User = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
    }),
};

module.exports = User;
