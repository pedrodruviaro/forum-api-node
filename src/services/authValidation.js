const Joi = require("joi");

module.exports = {
    registerValidation(data) {
        const schema = Joi.object({
            name: Joi.string().required().min(6).max(100),
            email: Joi.string().required().min(6).max(150).email(),
            password: Joi.string().required().min(6).max(72),
        });

        return schema.validate(data);
    },

    loginValidation(data) {
        const schema = Joi.object({
            email: Joi.string().required().min(6).max(150).email(),
            password: Joi.string().required().min(6).max(72),
        });

        return schema.validate(data);
    },
};
