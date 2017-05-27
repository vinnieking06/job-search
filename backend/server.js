const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const Job = require('./db')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.get("/jobs", (req,res) => {
    console.log("hello")
    Job.findAll().then((data) => {
        res.json(data)
    })
})

app.listen(3000, function(){
    console.log("Job Hunt server is running on 3000")
})
