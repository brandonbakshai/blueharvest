var express = require('express')
    , logger = require('morgan')
    , mongoose = require('mongoose')
    , app = express()
    // , template = require('pug').compileFile(__dirname + '/source/templates/homepage.pug')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

var dbHost = 'mongodb://localhost:27017/data/db';
mongoose.connect(dbHost);

// ----------------------------------------

var Schema = mongoose.Schema;

var bountySchema = new Schema({
    authors: Array,
    tagline: String,
    description: String,
    stats: {
        proj: {type: Number, default: 0},
        contr: {type: Number, default: 0},
        up: {type: Number, default: 0},
        down: {type: Number, default: 0}
    }
});

// the schema is useless so far
// we need to create a model using it
var Bounty = mongoose.model('Bounty', bountySchema);

// make this available to our users in our Node applications
module.exports = Bounty;

// ----------------------------------------

app.get('/', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/html/index.html')
    } catch (e) {
        next(e)
    }
})

app.get('/app.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/app.js')
    } catch (e) {
        next(e)
    }
})

app.get('/views/directives/popup.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/directives/popup.js')
    } catch (e) {
        next(e)
    }
})

app.get('/views/directives/navbar.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/directives/navbar.js')
    } catch (e) {
        next(e)
    }
})

app.get('/views/directives/filters.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/directives/filters.js')
    } catch (e) {
        next(e)
    }
})

app.get('/controllers/infiniteScroll.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/controllers/infiniteScroll.js')
    } catch (e) {
        next(e)
    }
})

app.get('/controllers/listeners/navbarListeners.js', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/controllers/listeners/navbarListeners.js')
    } catch (e) {
        next(e)
    }
})

app.get('/views/css/style.css', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/css/style.css')
    } catch (e) {
        next(e)
    }
})

app.get('/views/images/img.png', function (req, res, next) {
    try {
        res.sendFile(__dirname + '/views/images/img.png')
    } catch (e) {
        next(e)
    }
})


app.get('/generateBounty', function (req, res, next) {
    var tagline = "A web app to visualize sentiment across the United States.";
    var authors = ["Brandon Bakhshai"];
    for (var i = 0; i < 100; i++) {
        var bounty = Bounty({
            tagline: tagline,
            authors: authors
        });
    
        bounty.save(function(err) {
          if (err) throw err;
          console.log('Bounty created!');
        });
    }
})

app.get('/bounties', function(req, res, next) {
    Bounty.find({}).exec(function(err, result) {
        if (!err) {
            res.send(result);
            // handle result
        } else {
            // error handling
        }
    });
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
})
