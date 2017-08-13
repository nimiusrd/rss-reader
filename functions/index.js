const functions = require('firebase-functions');
const fetch = require('node-fetch')
const fs = require('fs')

const option = {
    method: 'GET',
    client_id: functions.config().feedly.clientid,
    headers: {
        Authorization: functions.config().feedly.authorization
    }
}

exports.feeds = functions.https.onRequest((req, res) => {
  const feedid = encodeURIComponent('feed/http://html5experts.jp/feed/')
  fetch(`https://cloud.feedly.com/v3/streams/${feedid}/contents`, option)
    .then(res => res.json())
    .then(json => {
      const result = json.items.map(item => {
        return {
          link: item.alternate[0].href,
          description: item.content.content,
          title: item.title
        }
      })
      res.send(result)
    })
    .catch(e => {
      res.send(e)
    })
})

