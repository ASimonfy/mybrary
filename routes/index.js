const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

// export the router to be used in server.js
module.exports = router