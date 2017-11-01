<template>
	<div class="container">
		<div class="notification columns">
			<div class="column">
				
				<user-card :user="user"></user-card>
				<hr>
				<router-link to="/trips/new"><span class="button is-primary is-large is-outlined">Register your new trip</span></router-link>
				<router-link to="/profile/update"><span class="button is-primary is-large is-outlined"><i class="fa fa-cog" aria-hidden="true"></i>Edit your account </span></router-link>
				<hr>
				<h4 class="title is-4" v-if="orders.length>0"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Your orders</h4>
				<div v-if="orders.length>0" class="columns">
						<order-card v-for="order in orders" :key="order.id" :order="order" class="column"></order-card>
				</div>
			<!-- <router-link to="#"><span class="button is-primary is-large is-outlined">Make an oder</span></router-link> -->
			</div>

			
			<div class="column">
				<h4 class="title is-4" v-if="trips.length>0"><i class="fa fa-plane" aria-hidden="true"></i>Your trips</h4>
				<div v-if="trips.length>0">
						<trip-card v-for="trip in trips" :key="trip.id" :trip="trip" class="column"></trip-card>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import UserCard from '@/components/UserCard'
	import TripCard from '@/components/TripCard'
	import OrderCard from '@/components/OrderCard'
	import { showTrips } from '@/api/trips'
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

<style>
	.notification a:not(.button) {
	text-decoration: none;
	color: #7957d5;
	}
	.box {
		margin-bottom: 1.5rem;
		margin-left: 5px;
	}
	i {
		margin-right: 10px;
	}
</style>