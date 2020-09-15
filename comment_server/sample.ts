import {LiveChat} from 'youtube-chat'

console.log('start')

//const liveComment = new LiveChat({channelId: 'UC1opHUrw8rvnsadT-iGp7Cg'})
//const liveComment = new LiveChat({channelId: 'UCvInZx9h3jC2JzsIzoOebWg'})
// 第３引数にチャンネルIDを追加
const liveComment = new LiveChat({channelId: process.argv[2]})
liveComment.start()
liveComment.on('comment', (comment) => {
  var komento = comment.message['0']['text']
  console.log(komento)
  //console.log(Object.values(comment.message));
  //console.log(JSON.stringify(comment.message));

  if(komento.indexOf('なぁ')>0) {
      console.log( 'なぁがついてる！！' );
  }
  else if(komento.indexOf('あ')>0) {
      console.log( 'あがついてる！！' );
  }
  else if(komento.indexOf('おい')>0) {
      console.log( 'クソコメントだ' );
  }
  else {
      console.log( '結果：特に見つかりません！' );
  }
})

interface CommentItem {
  id: string
  author: {
    name: string
    thumbnail?: ImageItem
    channelId: string
    badge?: {
      thumbnail: ImageItem
      label: string
    }
  }
  message: MessageItem[]
  superchat?: {
    amount: string
    color: number
  }
  membership: boolean
  isOwner: boolean
  timestamp: number
}

type MessageItem = { text: string } | ImageItem


interface ImageItem {
  url: string
  alt: string
  width: number
  height: number
}
