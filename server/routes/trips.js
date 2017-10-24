const express = require('express');
const router = express.Router();
//const User = require('../models/user');
const Trip = require('../models/trip');

//trip endpoints
router.get('/', (req,res,next) => {
	Trip.find({}, 'from to tripDate status _id')
	.then(trips => {
		res.json(trips);
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

router.post('/', (req,res,next) => {
	const { from, to, tripDate, travelerId, status } = req.body;
	const trip = new Trip({
		from, 
		to, 
		tripDate, 
		travelerId, 
		status
	});

	trip.save()
		.then(trip => {
			res.json(trip);
		})
		.catch(err => next(err));
});

router.patch('/:id', (req, res, next) => {
	console.log(req.body);
	Trip.findByIdAndUpdate(req.params.id, req.body, { new: true})
		.then(trip => {
			res.json(trip);
		})
		.catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
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