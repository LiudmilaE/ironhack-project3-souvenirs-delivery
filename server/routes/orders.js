const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config');
const Order = require('../models/order');

//order endpoints
router.get('/', (req,res,next) => {
	Order.find({}, '_id clientId tripId travelerId status souvenirTitle description pickupDate')
	.then(orders => {
		res.json(orders);
	})
	.catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
	Order.findById(req.params.id)
	.then(order => {
		res.json(order);
	})
	.catch(err => next(err));
});

router.post('/', passport.authenticate('jwt', config.jwtSession), (req,res,next) => {
	const { travelerId, tripId, souvenirTitle, description, pickupDate } = req.body;
	const clientId = req.user._id;
	const order = new Order({
		clientId,
		travelerId, 
		tripId,
		souvenirTitle,
		description,
		pickupDate, 
	});

	order.save()
		.then(order => {
			res.json(order);
		})
		.catch(err => next(err));
});

router.patch('/:id', passport.authenticate('jwt', config.jwtSession), (req, res, next) => {
	Order.findByIdAndUpdate(req.params.id, req.body, { new: true})
		.then(order => {
			res.json(order);
		})
		.catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
	Order.findByIdAndRemove(req.params.id)
		.then(order => {
			if (!order) {
				return res.status(404).json({
					message: `Order with id '${req.params.id}' doesn't exist`,
				});
			}
			res.json(order);
		})
});

module.exports = router;