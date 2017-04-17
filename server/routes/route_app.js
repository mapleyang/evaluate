let url = require('url');  
let dealFn = require('./dealfn.js');
let cralwer = require('../utils/cralwer.js')
let ExcelUtil = require('../utils/excelUtil.js');
let fs = require('fs');
let path = require('path');
var mime = require('mime');
function sendDataFn(req, res, filename, needcity, flag) {
    let query = url.parse(req.url, true).query,
        name = query.name || '',
        city = query.city,
        readFileName = '',
        sendData = {
            errno: 0,
            success: true,
            city: city,
            msg: 'ok',
            data: "test"
        };
    console.log(query)
    if (needcity) {
        readFileName = city + filename;
    } else {
        readFileName = filename;
    }
    switch(flag) {
      case "register":
        dealFn.readFileData(readFileName).then((data) => {
            if(data.length !== 0) {
              let flag = true;
              data.user.forEach(el => {
                if(el.userName === query.userName) {
                  flag = false
                }
              })
              if(flag) {
                data.user.push(query)
              }
            }
            else {
              data.user.push(query);
            }
            dealFn.writeFileData(readFileName, data).then((wdata) => {
                sendData.data = wdata;
                res.send(JSON.stringify(sendData));
            }, (msg) => {
                sendData.errno = -1;
                sendData.msg = '注册异常';
                res.send(JSON.stringify(sendData));
            })
        }, (msg) => {
            sendData.errno = -1;
            sendData.msg = '暂时没有数据';
            res.send(JSON.stringify(sendData));
        })
        break;
      case "createPlan":
        let obj = {plan: []}; 
        obj.plan.push(query)
        dealFn.writeFileData(readFileName, obj).then((data) => {
              sendData.data = data;
              res.send(JSON.stringify(sendData));
          }, (msg) => {
              sendData.errno = -1;
              sendData.msg = '创建计划异常';
              res.send(JSON.stringify(sendData));
          })
        break;
      default:
        dealFn.readFileData(readFileName).then((data) => {
            sendData.data = data;
            res.send(JSON.stringify(sendData));
        }, (msg) => {
            sendData.errno = -1;
            sendData.msg = '暂时没有数据';
            res.send(JSON.stringify(sendData));
        })
        break;
    }
}

exports.index = (req, res) => {
   //  console.log(req)
   //  var test = {
   //      test: "hello"
   //  }
   // sendDataFn(req, res, 'coming.json', false);
   res.render("../views/index.html")
}

exports.coming = (req, res, next) => {
    let query = url.parse(req.url, true).query,
        limit = query.limit,
        offset = query.offset;
    if (limit && offset) {
        next();
    } else {
        sendDataFn(req, res, 'coming.json', false);
    }
}

exports.comingLimit = (req, res) => {
    let query = url.parse(req.url, true).query,
        limit = +query.limit,
        offset = +query.offset,
        sendData = {
            errno: 0,
            total: 0,
            limit: limit,
            offset: offset,
            msg: 'ok',
            data: {}
        };
    dealFn.readFileData('coming.json').then((data) => {
        let list = data.data.returnValue
        let sendList = list.slice(offset, offset + limit)
        data.data.returnValue = sendList
        sendData.data = data;
        sendData.total = list.length
        res.send(JSON.stringify(sendData));
    }, (msg) => {
        sendData.errno = -1;
        sendData.msg = '暂时没有数据';
        res.send(JSON.stringify(sendData));
    })
}

exports.cinema = (req, res) => {
    sendDataFn(req, res, '_cinema.json', true);
}

exports.hot = (req, res) => {
    sendDataFn(req, res, '_hot.json', true);
}

exports.info = (req, res) => {
    sendDataFn(req, res, '_info.json', false);
}

exports.evaluation = (req, res) => {
    sendDataFn(req, res, '_evaluation.json', false);
}

exports.swiper = (req, res) => {
    sendDataFn(req, res, 'swiper.json', false);
}

exports.city = (req, res) => {
    sendDataFn(req, res, 'city.json', false);
}

exports.cinema_detail = (req, res) => {
    sendDataFn(req, res, 'cinema_detail.json', false);
}

exports.register = (req, res) => {
   sendDataFn(req, res, 'user.json', false, "register");
}

exports.login = (req, res) => {
   sendDataFn(req, res, 'user.json', false, "login");
}

exports.createPlan = (req, res) => {
   sendDataFn(req, res, 'plan.json', false, "createPlan");
}

exports.readPlan = (req, res) => {
   sendDataFn(req, res, 'plan.json', false, "readPlan");
}
