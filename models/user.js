var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    dbHost = 'mongodb://localhost:27017/data/db';

mongoose.connect(dbHost);
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    hashedPassword: String,
    postsCreated: Array,
    postsContributed: Array,
});

userSchema.methods.hashAndStorePassword = hashAndStorePassword(err, password);

function hashAndStorePassword(err, password) {
    if (err) {
        console.log("ERROR: " + err);
        return ;
    } 
    bcrypt.hash(password, 8, hashCallBack(err, hash));
};

function hashCallback(err, hash) {
    if (err) {
        console.log("ERROR: " + err);
        return ;
    } 
    this.hashedPassword = hash;
    this.save(saveCallback(err));
}

function saveCallback(err) {
    if (err) {
        console.log("ERROR: " + err);
        return ;
    }
}

userSchema.methods.verifyPassword = function verifyPassword(err, email, password) {
    if (err) {
        console.log("ERROR: " + err);
        return ;
    } 

    bcrypt.compare(password, 8, function(err, hash) {
        if (err) {
            console.log("ERROR: " + err);
            return ;
        } 
        // load the hashedPassword of user
        User.findOne({ hashedPassword: 'Ghost' }, 'name occupation', function (err, person) {
            if (err) return handleError(err);
            console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
        }) 
    });
};

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('User', userSchema);
