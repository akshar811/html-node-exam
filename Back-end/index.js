const express = require('express');
const connect = require('./config/db');
const cookie = require("cookie-parser");
const cors=require("cors");
const { router } = require('./routes/user');

const app = express();
app.use(express.json());
app.use(cookie());
app.use(cors());

app.use("/user",router);
app.listen(8090,()=>{
    console.log("listening on port 8090");
    connect();
})