require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const route= require('./route')
const dbConnection = require('./database/dbConnection')
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(route)
dbConnection()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
