const express = require("express");
const path = require("path");
const fs = require("fs");



const app = express();

// app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

const staticFilePath = path.join(__dirname, "public")

app.get("/", (req, res) => {
    res.sendFile(path.join(staticFilePath, "index.html"))
    console.log(__dirname)
})
app.get("/user", (req, res) => {
    // res.sendFile(path.join(__dirname, "public", "second.html"))
    res.send({__dirname,__filename})
})

app.listen(5000, () => {
    console.log("Server sunning/......")
})