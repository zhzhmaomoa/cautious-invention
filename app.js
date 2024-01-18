const express = require("express");
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname,"./public")))
const port =22345
app.listen(port,()=>{
    console.log('http://127.0.0.1:'+22345)
});