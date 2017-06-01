const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } 
    else {
        next();
    }
};

app.use(allowCrossDomain);

app.post("/jobs", (req, res) => {
    const job = req.body;
    db.Job.create({
        company: job.company,
        job: job.job,
        link: job.link,
        notes: job.notes
    }).then(() => {
        res.end()
    })
})

app.get("/jobs", (req, res) => {
    db.Job.findAll({
        include: [
            {
                model: db.Activity
            },
            {
                model: db.FollowUp
            }
        ]
        }).then((data) => {
            res.send(data)
        })
})

app.post("/activity", (req, res) => {
    db.Activity.create({
        jobId: req.body.jobId,
        content: req.body.content
    }).then(function(data){
        res.send(data)
    })
})

app.post("/followup", (req, res) => {
    db.FollowUp.create({
        jobId: req.body.jobId,
        content: req.body.content,
        duedate: req.body.dueDate
    }).then((data) =>{
        res.send(data)
    })
})

app.listen(3000, function(){
    console.log("Job Hunt server is running on 3000")
})
