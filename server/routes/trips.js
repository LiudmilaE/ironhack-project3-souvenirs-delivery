const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config');
const Trip = require('../models/trip');

//trip endpoints
router.get('/', (req,res,next) => {
	let attribute = req.query.from; //search by country 'from'
	let param = {}
	if (attribute) { 
		param = { from: attribute }
	 }
	Trip.find(param, '_id from to tripDate endTripDate travelerId deliveryPrice acceptOrders')
	.then(trips => {
		res.json(trips);
	})
	.catch(err => next(err));
});

router.post('/', passport.authenticate('jwt', config.jwtSession), (req,res,next) => {
	const { from, to, tripDate, endTripDate, deliveryPrice} = req.body;
	const travelerId = req.user._id;
	const trip = new Trip({
		from, 
		to, 
		tripDate,
		endTripDate, 
		travelerId, 
		deliveryPrice
	});
	//console.log(trip);

	trip.save()
		.then(trip => {
			res.json(trip);
		})
		.catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
	Trip.findById(req.params.id)
	.then(trip => {
		res.json(trip);
	})
	.catch(err => next(err));
});

router.patch('/:id', passport.authenticate('jwt', config.jwtSession), (req, res, next) => {
	Trip.findByIdAndUpdate(req.params.id, req.body, { new: true})
		.then(trip => {
			res.json(trip);
		})
		.catch(err => next(err));
});

router.delete('/:id', passport.authenticate('jwt', config.jwtSession),  (req, res, next) => {
	Trip.findByIdAndRemove(req.params.id)
		.then(trip => {
			if (!trip) {
				return res.status(404).json({
					message: `Trip with id '${req.params.id}' doesn't exist`,
				});
			}
			res.json(trip);
		})
});

module.exports = router;