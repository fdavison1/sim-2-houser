//requirements
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

//endpoints

//listening
massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, ()=> console.log(`server port ${SERVER_PORT} is on and ready to copy`))
})