if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// Routers
const indexRouter = require('./routes/index')

// Mongoose
const mongoose = require('mongoose')

// View Engine
app.set('view engine', 'ejs')
// Current dirname + views
app.set('views', __dirname + '/views')
// All files will be put into a layout
// No need to duplicate beginning / ending HTML code
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
// Public files (stylesheets, js, imgs)
app.use(express.static('public'))

// Use routers for different routes
app.use('/', indexRouter)

// Hoop up MongoDB
// Resolve deprecations
// DB URL coming from Server via Environment Variable
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// Verify DB is on
const db = mongoose.connection
db.on('error', error => console.log(erorr))
db.on('once', () => console.log('Connected to Mongoose'))

// Let the Server deliver the port
// Default 3000 for dev
app.listen(process.env.PORT || 3000)


