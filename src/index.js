//Libaries
const express = require("express");
const app = express();

//Server
const port = process.env.PORT || 3000;

//Server starting
app.listen(port, () => console.log("Server started on port " + port));

//File the server will be using
app.use(express.static("public"));

//Sign Up
app.post("/signup", (req, res) => {
    try {
        let data = req.body;

        res.status(200).send("Example Data" + data);
    } catch (err) {
        res.status(500).send("Error");
    }
})