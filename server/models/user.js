const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const countriesDB = require('../data/countries');


const COUNTRIES = countriesDB.map(function(obj){
	return obj.name
});


const userSchema = new Schema({
	//for social login
	facebookId: String,
	// the username and password are added by passportLocalMongoose
	firstName: { 
		type: String, 
		//required: true 
	},
	lastName: { 
		type: String, 
		//required: true 
	},
	email: { 
		type: String, 
		unique: true,
		//required: true 
	},
	country: { 
		type: String, 
		enum: COUNTRIES,
		//required: true 
	},
	iso: {
		type: String,
	},
	image: { 
		type: String, 
		default: null 
	},
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(timestamps);
userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

module.exports = mongoose.model('User', userSchema);