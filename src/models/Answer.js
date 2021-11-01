const Sequelize = require("sequelize");
const database = require("../database");

const Answer = database.define(
    "answers",
    {
        body: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
    },
    { timestamps: true }
);

module.exports = Answer;
