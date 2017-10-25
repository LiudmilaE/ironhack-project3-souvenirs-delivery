const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
const countriesDB = require('../data/countries');

const COUNTRIES = countriesDB.map(function(obj){
	return obj.name
});

//admin should approve the souvenir 
//so it can appear at souvenirs list
const STATUSES = ['pending', 'accepted', 'rejected'];

const souvenirSchema = new Schema({
	title: { 
		type: String,
		required: true 
	},
	description: { 
		type: String,
		required: true
	},
	country: { 
		type: String,
		enum: COUNTRIES,
		default: "Ukraine",
		required: true
	},
	image: String,
	status: {
		type: String,
		enum: STATUSES,
		default: 'pending'
	},
});

souvenirSchema.plugin(timestamps);

module.exports = mongoose.model('Order', souvenirSchema);