const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema} = mongoose;

const userSchema = new Schema({
	// the username and password are added by passportLocalMongoose
	firstName: String,
	lastName: String,
	email: String,
});

userSchema.plugin(passportLocalMongoose);

module.export = mongoose.model('User', userSchema);