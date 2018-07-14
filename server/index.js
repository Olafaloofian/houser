const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../build`))

console.log( process.env.CONNECTION_STRING )
massive( process.env.CONNECTION_STRING ).then(database => {
    app.set('db', database)
}).catch(err => console.log('--------------Massive error', err))

app.get('/api/houses', controller.read)
app.get('/api/house/:id', controller.getOne)
app.post('/api/houses', controller.create)
app.delete('/api/house/:id', controller.delete)

const PORT = 4000
app.listen(PORT, () => console.log(`SERVER IS LISTENING ON PORT ${PORT}!`))