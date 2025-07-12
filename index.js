const express = require("express");
const app = express();

app.get('/',(req,res) => res.status(200).send("hello world"));

app.get('/api/current-year',(req,res)=>{
    res.send(new Date().getFullYear());
})

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log("listensing on ",port);
})