'use strict'

const express = require('express')
const port = process.env.PORT || 3700

var app = new express()

app.get('/', (req, res) => {
  res.send('Hello piriku!')
})

app.listen(port, () => {
  console.log(['App is listening on', port].join(' '))
})
