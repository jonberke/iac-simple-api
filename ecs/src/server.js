'use strict'
const express = require('express')

const PORT = 80
const HOST = '0.0.0.0'

const app = express()
app.use(function (req, res) {
  console.log('Request received at ' + new Date().toISOString())

  res.setHeader('content-type', 'application/json')
  res.send(JSON.stringify({ status: 'ok' }))
});

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
