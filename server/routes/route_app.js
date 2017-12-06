let url = require('url');  
let dealFn = require('./dealfn.js');
let cralwer = require('../utils/cralwer.js')
let ExcelUtil = require('../utils/excelUtil.js');
let fs = require('fs');
let path = require('path');
var mime = require('mime');
function sendDataFn(req, res, filename) {
  let sendData = {
    status: 2000,
    message: "success",
    data: ""
  };
  dealFn.readFileData(filename).then((data) => {
    sendData.data = data;
    res.send(JSON.stringify(sendData));
  }, (msg) => {
    sendData.status = 5000;
    sendData.message = 'false';
    res.send(JSON.stringify(sendData));
  })
}

exports.index = (req, res) => {
   sendDataFn(req, res, 'coming.json');
   res.render("../views/index.html")
}

exports.register = (req, res) => {
   sendDataFn(req, res, 'user.json');
}

exports.login = (req, res) => {
   sendDataFn(req, res, 'user.json');
}

exports.products = (req, res) => {
   sendDataFn(req, res, 'products.json');
}

