<template>
	<div class="container">
		<div class="notification">
			<h2 class="title" v-if="$root.user">Welcome to your profile page!</h2>
			<br>
			<user-card :user="user"></user-card>
			<br>
			<router-link to="/trips/new"><span class="button is-primary is-large is-outlined">Register your new trip</span></router-link>
			<!-- <router-link to="#"><span class="button is-primary is-large is-outlined">Make an oder</span></router-link> -->
			<hr>
			<h3 class="subtitle">Your trips</h3>
			<div v-if="trips.length>0" class="columns">
					<trip-card v-for="trip in trips" :key="trip.id" :trip="trip" class="column"></trip-card>
			</div>
			<hr>
			<h3 class="subtitle">Your orders</h3>
			<div v-if="orders.length>0" class="columns">
					<order-card v-for="order in orders" :key="order.id" :order="order" class="column"></order-card>
			</div>
			<br>
		</div>
	</div>
</template>

<script>
	import UserCard from '@/components/UserCard'
	import TripCard from '@/components/TripCard'
	import OrderCard from '@/components/OrderCard'
	import { showTrips } from '@/api/trips'
	import { showOrders } from '@/api/orders'

	export default {
		data () {
			return {
				user: this.$root.user || null,
				trips: [],
				orders: [],
			}
		},
		created() {
			//show user's trips
			showTrips().then(trips => { 
				let id = this.$root.user._id
				this.trips = trips.filter(trip => trip.travelerId === id);
			 });
			showOrders().then(orders => { 
				let id = this.$root.user._id
				this.orders = orders.filter(order => order.clientId === id);
			 })
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
	margin-left: 1rem;
}
</style>