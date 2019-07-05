const express = require("express");
const app = express();

app.get('/',(req,res) =>{
    let nav = req.headers['user-agent'];
    res.send(nav);
})



app.listen(3000,()=> console.log("Listening on port 3000"))