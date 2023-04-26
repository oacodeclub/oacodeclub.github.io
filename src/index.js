//Libaries
const express = require("express");
const app = express();

//Server
const port = process.env.PORT || 3000

//Server starting
app.listen(port, () => console.log("Server started on port " + port));

//File the server will be using
app.use(express.static("public"));