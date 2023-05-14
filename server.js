
//call express
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT


//get
app.get('/', (req, res) => {
    res.send('Hello, world!')
  })
  
  app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
  

//listen
app.listen(3000)

//export
module.export = app;
