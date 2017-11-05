<template>
	<div class="container">
		<section class="notification columns">
			<div class="column">
				<user-card :user="user"></user-card>
				<hr>
				<router-link to="/trips/new"><span class="button is-primary is-outlined"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i>Your new trip</span></router-link>
				<router-link to="/trips"><span class="button is-primary is-outlined"><i class="fa fa-gift" aria-hidden="true"></i>Your new order</span></router-link>
				<router-link to="/profile/update"><span class="button is-primary is-outlined"><i class="fa fa-cog" aria-hidden="true"></i>Edit your account </span></router-link>
				<hr>
				<h4 class="title is-4" v-if="orders.length>0"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Your orders, that you should pick up</h4>
				<div v-if="orders.length>0">
					<order-card v-for="(order,index) in orders" :key="order.id" :order="order" class="column" @deleteOrder="deleteThisOrder(index)"></order-card>
				</div>
			</div>
			<hr>
			<div class="column">
				<h4 class="title is-4" v-if="trips.length>0"><i class="fa fa-plane" aria-hidden="true"></i>Your next trips</h4>
				<div v-if="trips.length>0">
						<trip-card v-for="(trip, index) in trips" :key="trip.id" :trip="trip" class="column" @deleteTrip="deleteThisTrip(index)" @updateTrip="updateThisTrip(index, $event)"></trip-card>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import UserCard from '@/components/UserCard'
	import TripCard from '@/components/TripCard'
	import OrderCard from '@/components/OrderCard'
	import { showTrips } from '@/api/trips'
	import { showTrip } from '@/api/trips'
	import { showOrders } from '@/api/orders'
	import { showUser } from '@/api/auth'

	export default {
		data () {
			return {
				user: showUser(this.$root.user._id) || this.$root.user || null,
				trips: [],
				orders: [],
			}
		},
		methods: {
			deleteThisOrder: function(index) {
            	this.orders.splice(index, 1);
        	},
        	deleteThisTrip: function(index) {
        		this.trips.splice(index, 1);
        	},
        	updateThisTrip: function(index, trip) {
        		//console.log('profile', trip._id);
        		showTrip(trip._id).then(data =>{
        			console.log(data)
        			this.trips.splice(index, 1, data);
        		});	
        	},
		},
		created() {
			//show user's trips
			let today = new Date();
			showTrips().then(trips => { 
				let id = this.$root.user._id
				this.trips = trips.filter(trip => {
					let date = new Date(trip.tripDate);
					return date > today && trip.travelerId === id});
			 });
			showOrders().then(orders => { 
				let id = this.$root.user._id
				this.orders = orders.filter(order => {
					let date = new Date(order.pickupDate);
					return date > today && order.clientId === id});
			 });
			showUser(this.$root.user._id).then(user => {
					this.user = user;
				});
		},
		components: {
			UserCard,
			TripCard,
			OrderCard
		},
	}
</script>

