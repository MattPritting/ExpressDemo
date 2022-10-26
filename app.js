const express = require('express')
const app = express()
const port = 5034

app.get('/', (req, res) => {
  res.send('Hello World!\
  Good to meet you. I am Matt\
  What up?')
})
https://runkit.com/embed/save
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})