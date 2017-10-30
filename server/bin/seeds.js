const mongoose = require('mongoose');
const User = require('../models/user');
const Trip = require('../models/trip');
const Souvenir = require('../models/souvenir');

mongoose.connect('mongodb://localhost/souvenirs-delivery', {
	useMongoClient: true,
});

//4 functions:
//connection to DB
//cleanup
//seeding
//disconnect

/*function findIdWithProperty(array, property, value){
	const el = array.find(el=> el[property]===value)
	if (!el) {throw Error('Cannot find object) }
	return el._id
}
F.E.  findIdWithProperty(master, 'title', 'Asterix & Obelix')*/