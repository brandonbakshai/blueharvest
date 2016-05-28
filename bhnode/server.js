var express = require('express')
    , logger = require('morgan')
    , app = express()
    , template = require('pug').compileFile(__dirname + '/source/templates/homepage.pug')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
    try {
        res.sendFile("/Users/brandonbakhshai/Desktop/blueharvest/blueharvest/index.html")
    } catch (e) {
        next(e)
    }
})

app.get('/angular.min.js', function (req, res, next) {
    try {
        res.sendFile("/Users/brandonbakhshai/Desktop/blueharvest/blueharvest/angular.min.js")
    } catch (e) {
        next(e)
    }
})

app.get('/app.js', function (req, res, next) {
    try {
        res.sendFile("/Users/brandonbakhshai/Desktop/blueharvest/blueharvest/app.js")
    } catch (e) {
        next(e)
    }
})

app.get('/img.png', function (req, res, next) {
    try {
        res.sendFile("/Users/brandonbakhshai/Desktop/blueharvest/blueharvest/img.png")
    } catch (e) {
        next(e)
    }
})

var data = "hello I am a data"

app.get('/bounties', (req, res, next) => {
    try {
        res.send(data)
    } catch (e) {
        next(e)
    }
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
