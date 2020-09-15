const http = require('http');

var url = "http://localhost:8080/";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open("GET", url, true);
console.log('送ります');
request.send("");
//console.log(request.responseText);
// request.open('POST', 'url', true);
// request.send('aaa');


request.onreadystatechange = function() {
  if (request.readyState == 4 && request.status == 200) {
    //受信完了時の処理
    console.log('以下返ってきたやつ');
    console.log(request.responseText);
  }
}
