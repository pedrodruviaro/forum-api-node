const Sequelize = require("sequelize");
const database = require("../database");

const User = database.define(
    "users",
    {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);

module.exports = User;
