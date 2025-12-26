const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running.....");
});

app.get("/html", (req, res) => {
    res.send(`<h1>This is by html code.....</h1>
        <a href="/">home</a>
        `);
}); 

app.listen(5000,()=>{
console.log("Server is running.....");
});

