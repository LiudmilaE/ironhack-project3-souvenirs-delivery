const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	// the username and password are added by passportLocalMongoose
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	isAdmin: { type: Boolean, default: false },
	//isTraveler: Boolean,
	orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
	trips: [{ type: Schema.Types.ObjectId, ref: 'Trip' }]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);