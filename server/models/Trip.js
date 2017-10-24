const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
	from: { 
		type: String, 
		required: true 
	},
	to: { 
		type: String, 
		required: true 
	},
	tripDate: { 
		type: Date, 
		required: true 
	},
	travelerId: { 
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User' 
	},
	acceptOrders: { 
		type: Boolean, 
		default: true 
	},
	ordersList: [{ 
		type: Schema.Types.ObjectId, 
		ref: 'Order' 
	}],
	deliveryPrice: { 
		type: Number,
		default: null 
	},
});

tripSchema.plugin(timestamps);

module.exports = mongoose.model('Trip', tripSchema);