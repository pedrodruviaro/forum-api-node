const express = require("express");
const database = require("./database");

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

database
    .authenticate()
    .then(() => console.log("Connected to MySQL"))
    .catch((err) => console.log(err));

//MODELS AND RELATIONS
const User = require("./models/User");
const Post = require("./models/Post");
const Answer = require("./models/Answer");

Post.belongsTo(User);
Post.hasMany(Answer);
Answer.belongsTo(Post);

// User.sync({ force: true });
// Post.sync({ force: true });
// Answer.sync({ force: true });

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
