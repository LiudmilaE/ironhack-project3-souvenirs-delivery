const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
	//created: { type: Date, default: Date.now },
	clientId: { type: Schema.Types.ObjectId, ref: 'User' },
	travelerId: { type: Schema.Types.ObjectId, ref: 'User' },
	souvenirId: { type: Schema.Types.ObjectId, ref: 'Souvenir' },
	status: {
		type: String,
		enum: ['pending', 'accepted', 'done'],
		default: 'pending'
	},
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

module.exports = mongoose.model('Order', orderSchema);