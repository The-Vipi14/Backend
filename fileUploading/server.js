const express = require("express");
const app = express();

// multer. 

const multer = require("multer");

const fileUpload = multer({
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, "fileUploading/uploads");
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + Date.now() + ".jpg");
        }
    })
}).array("image_key");


app.post("/upload", fileUpload, (req, res) => {
    res.send("File uploaded.");
});

app.listen(5000, () => {
    console.log("server is running.");
});