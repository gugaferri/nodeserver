const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const url = "mongodb_srv_url"
mongoose.connect(url.toString())
