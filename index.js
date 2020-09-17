const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://mike98:abcd1234@mern.woxto.mongodb.net/MERN?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..!!")).catch(err => {console.log(err)});



app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.listen(port, () => console.log(`Example App Listening on port ${port}`));