var express = require('express')
    , logger = require('morgan')
    , mongoose = require('mongoose')
    , Bounty = require('./models/bounty.js')
    , User = require('./models/user.js')
    , dbHost = 'mongodb://localhost:27017/data/db'
    , app = express();

mongoose.connect(dbHost);

app.use(logger('dev'))
.use(express.static(__dirname + '/static'))

.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/views/html/index.html')
})

.get('/app.js', function (req, res, next) {
    res.sendFile(__dirname + '/app.js')
})

.get('/views/directives/popup.js', function (req, res, next) {
    res.sendFile(__dirname + '/views/directives/popup.js')
})

.get('/views/directives/navbar.js', function (req, res, next) {
    res.sendFile(__dirname + '/views/directives/navbar.js')
})

.get('/views/directives/filters.js', function (req, res, next) {
    res.sendFile(__dirname + '/views/directives/filters.js')
})

.get('/controllers/infiniteScroll.js', function (req, res, next) {
    res.sendFile(__dirname + '/controllers/infiniteScroll.js')
})

.get('/controllers/listeners/navbarListeners.js', function (req, res, next) {
    res.sendFile(__dirname + '/controllers/listeners/navbarListeners.js')
})

.get('/views/css/style.css', function (req, res, next) {
    res.sendFile(__dirname + '/views/css/style.css')
})

.get('/views/images/img.png', function (req, res, next) {
    res.sendFile(__dirname + '/views/images/img.png')
})


.get('/generateBounties', function (req, res, next) {
    console.log("hildas");
    Bounty.generateData();
    res.send("done");
})

.get('/bounties', function(req, res, next) {
    console.log("fetchData() about to run");
    Bounty.fetchData(res, 24);
})

.get('/controllers/listeners/bountyListener.js', function(req, res, next) {
    res.sendFile(__dirname + '/controllers/listeners/bountyListener.js')
})

.get('/controllers/temporary.js', function(req, res, next) {
    res.sendFile(__dirname + '/controllers/temporary.js')
})

.get('/generateUser', function(req, res, next) {
    User.generateData();
    res.send("Success!");
})

.get('/getAllUsers', function(req, res, next) {
    User.getAllUsers(req, res);
})

.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
})
