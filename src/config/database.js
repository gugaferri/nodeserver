const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const url = "mongodb+srv://todo:todo@cluster0.sotic.mongodb.net/todo?retryWrites=true&w=majority"
mongoose.connect(url.toString())
