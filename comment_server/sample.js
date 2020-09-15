"use strict";
exports.__esModule = true;
var http = require('http');
var fs = require('fs');
var script = require('./js/index.js');
var server = http.createServer();
server.on('request', getJs);
server.listen(8080);
console.log('Server running …');
function getJs(req, res) {
    var url = req.url;
    console.log(url);
    if ('/' == url) {
        fs.readFile('./test.html', 'UTF-8', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if ('/js/index.js' == url) {
        fs.readFile('./js/index.js', 'UTF-8', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        });
    }
}
var youtube_chat_1 = require("youtube-chat");
console.log('start');
//const liveComment = new LiveChat({channelId: 'UC1opHUrw8rvnsadT-iGp7Cg'})
//const liveComment = new LiveChat({channelId: 'UCvInZx9h3jC2JzsIzoOebWg'})
// 第３引数にチャンネルIDを追加
var liveComment = new youtube_chat_1.LiveChat({ channelId: process.argv[2] });
liveComment.start();
liveComment.on('comment', function (comment) {
    var komento = comment.message['0']['text'];
    console.log(komento);
    //console.log(Object.values(comment.message));
    //console.log(JSON.stringify(comment.message));
    if (komento.indexOf('なぁ') > 0) {
        console.log('なぁがついてる！！');
    }
    else if (komento.indexOf('あ') > 0) {
        console.log('あがついてる！！');
    }
    else if (komento.indexOf('おい') > 0) {
        console.log('クソコメントだ！！');
    }
    else {
        console.log('結果：特に見つかりません！');
        script.migi();
    }
});
