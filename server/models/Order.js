const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
// const countriesDB = require('../data/countries');

// const COUNTRIES = countriesDB.map(function(obj){
// 	return obj.name
// });

const STATUSES = ['pending', 'accepted', 'done', 'rejected'];

const orderSchema = new Schema({
	//created: { type: Date, default: Date.now },
	clientId: { 
		type: Schema.Types.ObjectId,
		required: true, 
		ref: 'User' },
	travelerId: { 
		type: Schema.Types.ObjectId, 
		ref: 'User' },
	status: {
		type: String,
		enum: STATUSES,
		default: 'pending'
	},
	souvenirTitle: { 
		type: String,
		required: true 
	},
	description: { 
		type: String,
		required: true
	},
	//image: String,
	// country: { 
	// 	type: String,
	// 	enum: COUNTRIES,
	// 	default: "Ukraine",
	// 	required: true
	// },
	
});

orderSchema.plugin(timestamps);

module.exports = mongoose.model('Order', orderSchema);