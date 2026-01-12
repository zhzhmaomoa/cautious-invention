const express = require("express");
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname,"./src")))
const port = 59997
const address = '127.0.0.1';
app.listen(port,address,()=>{
    console.log('http://'+address+':'+port)
});