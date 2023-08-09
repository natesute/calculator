/*
hosting a website on localhost:8080 using express that allows you to add two numbers as url parameters or subtract two numbers as url queries
*/

// import express
const express = require('express');
const path = require('path');

const VIEWS_PATH = path.join(__dirname, '/views');

// set the port
const PORT_NUMBER = 8080;

// create an express app
const app = express();

app.listen(PORT_NUMBER, () => {
    console.log(`Server running on port ${PORT_NUMBER}`);
});

app.get('/', function (req, res) {
    fileName = VIEWS_PATH + "index.html";
    res.sendFile(fileName);
});

app.get('/add/:no1/:no2', function (req, res) {// parameter
    fileName = VIEWS_PATH + "index.html";
    let number1 = parseInt(req.params.no1);
    let number2 = parseInt(req.params.no2);
    let result = number1 + number2; 
    res.send(String(result));//does not accept number
});

app.get('/sub', function (req, res) {// query string
    let number1 = parseInt(req.query.no1);
    let number2 = parseInt(req.query.no2);
    let result = number1 - number2;
    res.send(result + "");// a different way to convert to strings
});

app.get('/info', function (req, res) {
    fileName = VIEWS_PATH + "info.html";
    res.sendFile(fileName);
});