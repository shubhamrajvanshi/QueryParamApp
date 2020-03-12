const http = require('http');
const url = require('url');
const _ = require('lodash');
const fs = require('fs')

const queryParams = ['r','g','a','v','e'];

function isParamPresent(item, obj){
  return item in obj;
}

function checkParams(array, queryObject){
  
  for(index=0 ; index < array.length; index++){
      if(queryParams[index] in queryObject){
        continue;
      }
      else
        return false;
  }
  return true;
}

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  
  if(_.isEmpty(queryObject)){
    console.log("No query strings passed")
    res.writeHead(404,{'Content-type': 'application/json'});
    res.write("404 Not Found");
    res.end();
    // res.end('Please send proper request');	
  }
  else if (checkParams(queryParams, queryObject)){
    console.log("object passed is ", queryObject);
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'application/json'});
        console.log("No file found with path name:",q.pathname)
        return res.end("404 File Not Found");
      }
      console.log("serving file named:",q.pathname) 
      res.writeHead(200, {'Content-Type': 'application/text'}); 
      res.write(data);
      // res.writeHead(200, {'Content-Type': 'application/text'});
      // res.write(content);
      res.end();
      // res.end('Feel free to add query parameters to the end of the url');
    });
  }
  else{
    console.log('Invalid params passed in query params ', queryObject);
    res.writeHead(404,{'Content-Type': 'application/json'});
    res.end('404 Not found');
  }
}).listen(process.env.PORT || 8080);