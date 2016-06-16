var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// authors and projects are arrays of the common values we want along with
// the corresponding ObjectId in case we need more detailed information
var bountySchema = new Schema({
    authors: [{ name: String, _id: { type: Schema.ObjectId, ref: 'User' } }],
    authorsCache: [String],
    projects: [{ name: String, _id: { type: Schema.ObjectId, ref: 'Project' } }],
    tagline: String,
    description: String,
    statistics: {
        numberOfProjects: {type: Number, default: 0},
        numberOfContributors: {type: Number, default: 0},
        numberOfUpvotes: {type: Number, default: 0},
        numberOfDownvotes: {type: Number, default: 0}
    }
});

bountySchema.statics.fetchData = function(res, numberOfBounties) {
    this.find({})
        .limit(numberOfBounties)
        .exec(function(err, result) 
        {
            if (err) {
                console.log(err);
                return ;
            }
            console.log(result);
            res.send(result);
        });
};

bountySchema.statics.generateData = function() {
    var tagline = "A text summarisation-powered news site";
    var authors = ["Brandon Bakhshai"];
    for (var i = 0; i < 20; i++) {
        var bounty = this({
            tagline: tagline,
            authors: authors
        })
        .save(function(err) {
          if (err) return ;
        });
    }
}

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('Bounty', bountySchema);
