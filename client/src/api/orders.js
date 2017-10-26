import axios from 'axios';

function errHandler(err){
	console.error('API: ', err);
}

const ordersApi = axios.create({
	baseURL: 'http://localhost:3000/api/orders',
});

export function showOrders () {
	return ordersApi
		.get('/')
		.then(response => {
			return response.data;
		});
}

export function addOrder (orderInfo) {
	return ordersApi
		.post('/', orderInfo)
		.then(response => {
			return response.data;
		});
}

//TODO
// export function updateOrder (id, data) {
// 	return ordersApi
// 		.patch('/'+id, data)
// 		.then(response => {
// 			return response.data
// 		});
// }

export function deleteOrder (id) {
	return ordersApi
		.delete('/'+id)
		.then(response => {
			console.log("Order is deleted")
		});
}