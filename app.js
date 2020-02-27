const http = require('http');
const url = require('url');
const _ = require('lodash');

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
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(queryObject)+'\n');
    res.end('Feel free to add query parameters to the end of the url');
  }
  else{
    console.log('Invalid params passed in query params ', queryObject);
    res.writeHead(404,{'Content-Type': 'application/json'});
    res.end('404 Not found');
  }
}).listen(8080);