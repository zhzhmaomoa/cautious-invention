const express = require("express");
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname,"./public")))
const port = 80
const address = '0.0.0.0';
app.listen(port,address,()=>{
    console.log('http://'+address+':'+port)
});