const express = require('express')
const app = express()
const port = 5034

app.get('/', (req, res) => {
  res.send('Hello World!')
})
https://runkit.com/embed/save
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})