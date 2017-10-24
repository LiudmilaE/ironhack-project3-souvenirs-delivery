const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

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
	souvenirId: { type: Schema.Types.ObjectId,
		required: true, 
		ref: 'Souvenir' },
	status: {
		type: String,
		enum: STATUSES,
		default: 'pending'
	},
});

orderSchema.plugin(timestamps);

module.exports = mongoose.model('Order', orderSchema);