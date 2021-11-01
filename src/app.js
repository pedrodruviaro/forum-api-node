const express = require("express");
const dotenv = require("dotenv");
const database = require("./database");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database
    .authenticate()
    .then(() => console.log("Connected to MySQL"))
    .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
