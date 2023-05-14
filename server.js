
//call express
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello, world!')
})

//listen
app.listen(3000)

//export
module.export = app;

