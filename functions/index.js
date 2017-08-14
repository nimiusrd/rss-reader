const functions = require('firebase-functions');
const fetch = require('node-fetch')
const fs = require('fs')
const uuid = require('uuid/v5');

const option = {
    method: 'GET',
    client_id: functions.config().feedly.clientid,
    headers: {
        Authorization: functions.config().feedly.authorization
    }
}

exports.feeds = functions.https.onRequest((req, res) => {
  const feedId = 'feed/http://html5experts.jp/feed/'
  const encodedFeedId = encodeURIComponent(feedId)
  fetch(`https://cloud.feedly.com/v3/streams/${encodedFeedId}/contents`, option)
    .then(res => res.json())
    .then(json => {
      const result = json.items.map(item => {
        return {
          link: item.alternate[0].href,
          description: item.content.content,
          title: item.title,
          itemId: uuid(item.alternate[0].href, uuid.URL)
        }
      })
      res.send({
        feedId: uuid(feedId, uuid.URL),
        items: result
      })
    })
    .catch(e => {
      res.send(e)
    })
})

exports.subscriptions = functions.https.onRequest((req, res) => {
  fetch(`https://cloud.feedly.com/v3/subscriptions`, option)
    .then(res => res.json())
    .then(json => {
      const result = json.map(item => {
        return {
          website: item.website,
          id: item.id,
          title: item.title
        }
      })
      res.send(result)
    })
    .catch(e => {
      res.send(e)
    })
})
