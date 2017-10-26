const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config');
const Order = require('../models/order');

//order endpoints
router.get('/', (req,res,next) => {
	Order.find({}, '_id clientId travelerId status souvenirTitle description country image')
	.then(orders => {
		res.json(orders);
	})
	.catch(err => next(err));
});

router.post('/', passport.authenticate('jwt', config.jwtSession), (req,res,next) => {
	const { tripId, souvenirtitle,  } = req.body;
	const clientId = req.user._id;
	const order = new Order({
		travelerId, 
		souvenirId, 
	});
	console.log(order);

	order.save()
		.then(order => {
			res.json(order);
		})
		.catch(err => next(err));
});

module.exports = router;