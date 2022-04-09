const upload = require("../uploads/uploads"); 
const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.post("/upload", upload.single("file"), (req,res)=> { 
    if(req.file === undefined) return res.send("you must select a file."); 
    const imgUrl = `http://localhost:4000/file/${req.file.filename}`;
    return res.send(imgUrl)
});

module.exports = app