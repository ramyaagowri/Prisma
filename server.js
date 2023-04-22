const express = require("express");
const app = express();
const { quoraDb } = require("./quoraDB");

app.use(quoraDb , ()=>{console.log("Database connected")});


app.listen(4000 , ()=>{console.log("Listenig to port 4000")});