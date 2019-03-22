const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

const API = require('./api')

const PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/api', API)

app.listen(PORT, () => {
    console.log(`Listening on localhost:${ PORT }`)
})