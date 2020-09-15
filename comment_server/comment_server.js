const http = require('http');

var komento
var syuukeityu=false
var komentos=[]
var meirei_G

//　GET命令が飛んできてからコメントの集計を行う．
// return キャラの行動
function syuukei(callback){
  syuukeityu=true
  setTimeout(function(){
    console.log("AI:10秒経過しました")
    syuukeityu=false
    //var meirei=check(komentos)
    meirei_G=check(komentos)
    komentos=[]
    callback();
  },10000);
}

function check(texts){
  var meirei = '-1'
  console.log('------------------------');
  console.log(texts);
  console.log('------------------------');

  meirei='コメント数は'+String(texts.length)
  return meirei
}

const server = http.createServer((req, res) => {
  if(req.method=='GET') {
    // youtubeのコメント集計し，結果を返す．
    console.log('AI:GET命令きたよ');
    console.log('↓'.repeat(20));
    //syuukei()
    //res.end(komento)

    // execCallback()に渡されるコールバック関数
    var myCallback = function() {
      console.log(meirei_G);
      res.end(meirei_G)
    }

    // execCallback()にコールバック関数を渡して実行する
    //execCallback(myCallback);
    syuukei(myCallback)

    //res.end(syuukei())
  }
  if(req.method == 'POST') {
    // var postData = '';
    // req.on('data', function(chunk) {
    //     postData += chunk;
    // }).on('end', function() {
    //     res.end('今のコメントは、' + komento);
    // })
  }

  // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  // var text='<h1>aHello World</h1>'
  // res.write(text);
});

const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port);

// youtube処理
var youtube_chat_1 = require("youtube-chat");
console.log('start');
// 第３引数にチャンネルIDを追加
var liveComment = new youtube_chat_1.LiveChat({ channelId: process.argv[2] });
liveComment.start();
liveComment.on('comment', function (comment) {
    komento = comment.message['0']['text'];
    console.log(komento);
    if (syuukeityu) {
      komentos.push(komento)
    }
});
