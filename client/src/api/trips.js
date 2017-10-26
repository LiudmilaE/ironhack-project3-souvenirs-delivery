import axios from 'axios';

function errHandler(err){
	console.error('API: ', err);
}

const tripsApi = axios.create({
	baseURL: 'http://localhost:3000/api/trips',
});

export function showTrips (query) {
	if (query) {
		let param = query ? '?from='+ query : '';
		return tripsApi
		.get('/'+ param)
		.then(response => {
			return response.data;
		});
	}
	return tripsApi
		.get('/')
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
export function updateTrip () {

}