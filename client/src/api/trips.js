import axios from 'axios';

function errHandler(err){
	console.error('API: ', err);
}

const tripsApi = axios.create({
	baseURL: 'http://localhost:3000/api/trips',
});

export function showTrips (query) {
	//TODO
	return tripsApi
		.get('/', {
			params: query
		})
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

//TODO
export function updateTrip (id) {
	return tripsApi
		.patch('/'+id)
		.then(response => {
			return response.data
		});
}

export function deleteTrip (id) {
	return tripsApi
		.delete('/'+id)
		.then(response => {
			console.log("Trip is deleted")
		});
}