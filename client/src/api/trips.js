import axios from 'axios';

function errHandler(err){
	console.error('API: ', err);
}

const tripsApi = axios.create({
	baseURL: 'http://localhost:3000/api/trips',
});

export function addTrip (tripInfo) {
	return tripsApi
		.post('/', tripInfo)
		.then(response => {
			return response.data;
		});
}