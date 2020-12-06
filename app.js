const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000
const DBurl = process.env.DBurl

app.get('/heart_count', (req, res) => {
  MongoClient.connect(DBurl, async (err, client) => {
    if(err)
      res.send({ error: 'Database Connection: Seems like something went wrong!!' })
    else {
      const db = client.db('polas')
      const count = await db.collection('opinions').countDocuments({ like: true })
      client.close()
      res.send({ count: count })
    }
  })
})

app.post('/send_opinion', (req, res) => {
  MongoClient.connect(DBurl, (err, client) => {
    if(err)
      res.send({ error: 'Database Connection: Seems like something went wrong!!' })
    else {
      const db = client.db('polas')
      db.collection('opinions').insertOne(req.body)
      client.close()
      res.send({ success: 'Thankyou!! We took a note of that.' })
    }
  })
})

if (['production'].includes(process.env.NODE_ENV)) {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })

  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('ON PORT ', PORT)
})