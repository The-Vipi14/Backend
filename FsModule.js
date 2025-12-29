const express = require("express")
const app = express()
const path = require("path")
const fs = require('fs')

// fs.mkdir("files",(err)=>{
//     if(err) console.log(err)
// })

// path.join(__dirname,"files")

fs.writeFile(path.join(__dirname, "files", "note.txt"), "hello this is file writing.....", (err) => {
    if (err) console.log(err);
})

app.listen(5000, () => {
    console.log("Server is running.....");
});




