const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const countriesDB = require('../data/countries');

const COUNTRIES = countriesDB.map(function(obj){
	return obj.name
});


const userSchema = new Schema({
	// the username and password are added by passportLocalMongoose
	firstName: { 
		type: String, 
		required: true 
	},
	lastName: { 
		type: String, 
		required: true 
	},
	email: { 
		type: String, 
		required: true 
	},
	isAdmin: { 
		type: Boolean, 
		default: false 
	},
	country: { 
		type: String, 
		enum: COUNTRIES,
		required: true 
	},
	image: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(timestamps);

module.exports = mongoose.model('User', userSchema);