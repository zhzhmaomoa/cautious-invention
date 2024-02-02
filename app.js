const express = require("express");
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname,"./public")))
const port =443
const address = '127.0.0.1';
app.listen(port,address,()=>{
    console.log('http://'+address+':'+port)
});