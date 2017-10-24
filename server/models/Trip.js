const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
	from: { type: String, required: true },
	to: { type: String, required: true },
	tripDate: { type: Date, default: Date.now },
	travelerId: { type: Schema.Types.ObjectId, ref: 'User' },
	status: {
    type: String,
    enum: ['pending', 'accepted', 'done'],
    default: 'pending'
  },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

module.exports = mongoose.model('Trip', tripSchema);