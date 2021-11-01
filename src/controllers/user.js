const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const {
    loginValidation,
    registerValidation,
} = require("../services/authValidation");

router.post("/register", async (req, res) => {
    // validating input
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    try {
        // checking for user
        const userExists = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        console.log(userExists);

        if (userExists) {
            return res
                .status(400)
                .json({ error: "Email or username already in use " });
        }
    } catch (err) {
        return res.status(500).json(err);
    }

    try {
        // hashing password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            id: uuid(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        const { password, ...rest } = user.dataValues;
        console.log(user);
        return res.status(201).json({ ...rest });
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
