//requirements
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const c = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

//endpoints
app.get('/api/houses', c.getAll)
app.post('/api/houses', c.postHouse)
app.delete('/api/houses/:id', c.deleteHouse)

//listening
massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, ()=> console.log(`server port ${SERVER_PORT} is on and ready to copy`))
})