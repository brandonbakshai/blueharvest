var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

var userSchema = new Schema(
{
    name: String,
    hashedPassword: String,
    postsCreated: Array,
    postsContributed: Array,
});

userSchema.methods.hashAndStorePassword = hashAndStorePassword;

function hashAndStorePassword(password) 
{
    var curScope = this;
    bcrypt.hash(password, 8, function(err, hash) 
    {
        if (err) 
        {
            console.log("ERROR: " + err);
            return ;
        } 
        curScope.hashedPassword = hash;
        curScope.save(function(err) 
        {
            if (err) 
            {
                console.log("ERROR: " + err);
                return ;
            }
        });
    });
};



userSchema.methods.verifyPassword = verifyPassword;

function verifyPassword(email, password) 
{
    // load the hashedPassword of user
    User.findOne({ email: email }, 'hashedPassword', function(err, user) 
    {
        if (err) 
        {
            console.log("ERROR: " + err);
            return ;
        } 

        var hash = user.hashedPassword;
        bcrypt.compare(password, hash, function(err) 
        {
            if (err) 
            {
                console.log("ERROR: " + err);
                return ;
            }
        });
    }); 
}


userSchema.statics.generateData = function(req, res) {
    name = "Brandon Bakhshai";
    password = "password";

    var user = this({
        name: name,
        hashedPassword: password
    });

    user.hashAndStorePassword(password);

    user.save();
}


userSchema.statics.getAllUsers = getAllUsers;

function getAllUsers(req, res) 
{
    // load the hashedPassword of user
    this.find({}).exec(function(err, users) 
    {
        if (err) 
        {
            console.log("ERROR: " + err);
            return ;
        } 

        res.send(users);
    }); 
}


// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('User', userSchema);
