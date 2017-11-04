import axios from 'axios';

function errHandler(err){
	console.error('API: ', err);
}

const tripsApi = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? '/api/trips' : "http://localhost:3000/api/trips",
});

export function showTrips (query) {
	return tripsApi
		.get('/', {
			params: query
		})
		.then(response => {
			return response.data;
		});
}

export function showTrip (id) {
	return tripsApi
		.get('/'+id)
		.then(response => {
			return response.data;
		});
}

export function addTrip (tripInfo) {
	return tripsApi
		.post('/', tripInfo)
		.then(response => {
			return response.data;
		});
}

export function updateTrip (id, data) {
	return tripsApi
		.patch('/'+id, data)
		.then(response => {
			return response.data
		});
}

export function deleteTrip (id) {
	return tripsApi
		.delete('/'+id)
		.then(response => {
			
		});
}

export function listCountries() {
	const countriesDB = require('../../../server/data/countries');
	return countriesDB.map(function(obj){
		return obj.name
	});
}

export function countriesDB() {
	const countriesDB = require('../../../server/data/countries');
	return countriesDB
}

