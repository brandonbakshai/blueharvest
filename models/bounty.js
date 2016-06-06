var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/data/db';
mongoose.connect(dbHost);
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

bountySchema.statics.fetchData = function(res, numberOfBounties) {
    this.find({})
        .limit(numberOfBounties)
        .exec(
            function(err, result) {
                if (!err) {
                    res.send(result);
                    return true;
                    // handle result
                } else {
                    return false;
                    // error handling
                }
            });
};

bountySchema.statics.generateData = function() {
    var tagline = "A text summarisation-powered new site";
    var authors = ["Brandon Bakhshai"];
    for (var i = 0; i < 20; i++) {
        var bounty = this({
            tagline: tagline,
            authors: authors
        });
    
        bounty.save(function(err) {
          if (err) throw err;
          console.log('Bounty created!');
        });
    }
}

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('Bounty', bountySchema);
