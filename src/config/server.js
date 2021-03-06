const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const port = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.listen(port, function() {
    console.log(`Server is running on port ${port}`)
})

module.exports = server