const mongoose = require('mongoose');
const User = require('../models/user');
const Trip = require('../models/trip');
const Souvenir = require('../models/souvenir');

mongoose.connect('mongodb://localhost/souvenirs-delivery', {
	useMongoClient: true,
});