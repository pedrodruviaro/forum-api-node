const Sequelize = require("sequelize");
const database = require("../database");

const Post = database.define(
    "posts",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        body: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);

module.exports = Post;
