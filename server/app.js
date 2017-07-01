const express = require('express')
const fetch = require('node-fetch')
const fs = require('fs')

// Get Feedly developer access tokens from https://feedly.com/v3/auth/dev
const client_id = process.env.FEEDLY_CLIENT_ID
const auth = process.env.FEEDLY_AUTHORIZATION

const app = new express()
const option = {
    method: 'GET',
    client_id: client_id,
    headers: {
        Authorization: auth
    }
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/feed', (req, res) => {
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
          console.log(e)
        })
})

app.listen(8080)
