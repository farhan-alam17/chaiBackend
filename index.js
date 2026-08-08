require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("my twitter page id : alamfarhantwitter")
})

app.get('/login', (req, res) => {
    res.send("<h1>this is a login page</h1>")
})

app.get('/chai', (req,res) => {
    res.send("<h2>chai aur code</h2>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})