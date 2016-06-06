var express = require('express')
    , logger = require('morgan')
    , mongoose = require('mongoose')
    , Bounty = require('./models/bounty.js')
    , app = express()

.use(logger('dev'))
.use(express.static(__dirname + '/static'))

.get('/', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/html/index.html')
    } catch (e) {
        next(e)
    }
})

.get('/app.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/app.js')
    } catch (e) {
        next(e)
    }
})

.get('/views/directives/popup.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/directives/popup.js')
    } catch (e) {
        next(e)
    }
})

.get('/views/directives/navbar.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/directives/navbar.js')
    } catch (e) {
        next(e)
    }
})

.get('/views/directives/filters.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/directives/filters.js')
    } catch (e) {
        next(e)
    }
})

.get('/controllers/infiniteScroll.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/controllers/infiniteScroll.js')
    } catch (e) {
        next(e)
    }
})

.get('/controllers/listeners/navbarListeners.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/controllers/listeners/navbarListeners.js')
    } catch (e) {
        next(e)
    }
})

.get('/views/css/style.css', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/css/style.css')
    } catch (e) {
        next(e)
    }
})

.get('/views/images/img.png', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/images/img.png')
    } catch (e) {
        next(e)
    }
})


.get('/generate', function (req, res, next) {
    try {
        console.log(Bounty.generateData());
    } catch (e) {
        next(e)
    }
})

.get('/bounties', function(req, res, next) {
    try {
        console.log(Bounty.fetchData(res, 24));
    } catch (e) {
        next(e)
    }
})

.get('/controllers/listeners/bountyListener.js', function(req, res, next) {
    try {
        res.sendFile(__dirname + '/controllers/listeners/bountyListener.js')
    } catch (e) {
        next(e)
    }
})

.get('/controllers/temporary.js', function(req, res, next) {
    try {
        res.sendFile(__dirname + '/controllers/temporary.js')
    } catch (e) {
        next(e)
    }
})

.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
})
