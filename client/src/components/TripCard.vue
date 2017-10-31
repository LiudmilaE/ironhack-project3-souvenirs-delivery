<template>
	<div class="box trip" :trip="trip">
		<header class="card-header">
			<p class="card-header-title">
				<span class="emoji">&#x2708</span>
				Trip from {{ trip.from }} to {{ trip.to }}.
			</p>
		</header>
		<div class="card-content">
			<div class="content">
				<p v-if ="user && trip.travelerId !== user._id">
					<button class="button is-info is-medium" @click="showUserDetails(trip.travelerId)">
						<i class="fa fa-user" aria-hidden="true"></i>
						View traveler details
					</button>

					<b-modal :active.sync="isModalActive" has-modal-card>
						<user-card :user="traveler"></user-card>
					</b-modal>
				</p>
				<p v-if="user && trip.acceptOrders && trip.travelerId !== user._id">
					<button class="button is-primary is-medium" @click="isComponentModalActive = true">
						Add Order
					</button>

					<b-modal :active.sync="isComponentModalActive" has-modal-card>
						<order-form :trip="trip"></order-form>
					</b-modal>
				</p>
				<p v-if="trip.acceptOrders">Still accept orders</p>
				<p v-else>Stoped accept orders</p>
				<p>Delivery price {{ trip.deliveryPrice }}<i class="fa fa-usd" aria-hidden="true"></i></p>
				<time>Starts - {{ trip.tripDate | moment("dddd, MMMM Do YYYY") }}</time>
				<br>
				<time>Ends - {{ trip.endTripDate | moment("dddd, MMMM Do YYYY") }}</time>
				
				<div v-if="orders.length>0"> 
					<hr>
					<order-card :order="tripOrder" v-for="tripOrder in orders" :key="order.id"></order-card>
				</div>
			</div>
			<trip-edit-form v-if="showForm" :trip="trip"></trip-edit-form>
		</div>
		<footer class="card-footer" v-if="user && trip.travelerId === user._id">
			<a href="#" class="card-footer-item" @click.prevent="showForm=!showForm"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</a>
			<a href="#" @click.prevent="deleteTrip" v-if="trip.travelerId === user._id" class="card-footer-item"><i class="fa fa-times" aria-hidden="true"></i>Delete</a>
		</footer>
	</div>
</template>

<script>
	import OrderForm from '@/components/OrderForm'
	import OrderCard from '@/components/OrderCard'
	import UserCard from '@/components/UserCard'
	import TripEditForm from '@/components/TripEditForm'
	import { showTrips, updateTrip, deleteTrip } from '@/api/trips' // ?? maybe update delete only in profile
	import { showOrders } from '@/api/orders'
	import { showUser } from '@/api/auth'


	export default {
		data () {
			return {
				user: this.$root.user || null,
				isComponentModalActive: false,
				order: '',
				showForm: false,
				orders: [],
				isModalActive: false,
				traveler: null,
			}
		},
		components: {
			OrderForm,
			TripEditForm,
			OrderCard,
			UserCard
		},
		props: ['trip'],
		methods: {
			deleteTrip () {
				// let id = this.id
				deleteTrip(this.trip._id);
				this.$router.push('/');
			},
			showUserDetails (id) {
				showUser(id).then(user => {
				this.traveler = user;
				this.isModalActive = true;
			});
			}
		},
		created() {
			//show trip's orders
			showOrders().then(orders => { 
				let id = this.trip._id
				this.orders = orders.filter(order => order.tripId === id);
			 });
		},
	}
	
</script>

<style scoped>

	
</style>