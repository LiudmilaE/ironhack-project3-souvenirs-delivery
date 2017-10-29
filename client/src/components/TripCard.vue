<template>
	<div class="box" :trip="trip">
		<header class="card-header">
			<p class="card-header-title">
				<span class="emoji">&#x2708</span>
				Trip from {{ trip.from }} to {{ trip.to }}.
			</p>
		</header>
		<div class="card-content">
			<div class="content">
				<p v-if ="trip.travelerId !== user._id">View traveler details {{ trip.travelerId }}</p>
				<p v-if="trip.acceptOrders">Still accept orders</p>
				<p v-else>Stoped accept orders</p>
				<p>Delivery price {{ trip.deliveryPrice }}</p>
				<time>{{ trip.tripDate }}</time>
				<div v-if="orders.length>0"> 
					<order-card :order="tripOrder" v-for="tripOrder in orders" :key="order.id"></order-card>
				</div>
			</div>
			<trip-edit-form v-if="showForm" :trip="trip"></trip-edit-form>
		</div>
		<footer class="card-footer" v-if="user && trip.travelerId === user._id">
			<a href="#" class="card-footer-item" @click.prevent="showForm=!showForm">Edit</a>
			<a href="#" @click.prevent="deleteTrip" v-if="trip.travelerId === user._id" class="card-footer-item">Delete</a>
		</footer>
		<footer class="card-footer" v-if="user && trip.acceptOrders && trip.travelerId !== user._id">
        <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
            Add Order
        </button>

        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <order-form :trip="trip"></order-form>
        </b-modal>
		</footer>
	</div>
</template>

<script>
	import OrderForm from '@/components/OrderForm'
	import OrderCard from '@/components/OrderCard'
	import TripEditForm from '@/components/TripEditForm'
	import { showTrips, updateTrip, deleteTrip } from '@/api/trips' // ?? maybe update delete only in profile
	import { showOrders } from '@/api/orders'


	export default {
		data () {
			return {
				user: this.$root.user || null,
				isComponentModalActive: false,
				order: '',
				showForm: false,
				orders: []
			}
		},
		components: {
      OrderForm,
      TripEditForm,
      OrderCard,
    },
		props: ['trip'],
		methods: {
			deleteTrip () {
				// let id = this.id
				deleteTrip(this.trip._id);
				this.$router.push('/');
			}
		},
		created() {
			//show trip's orders
			showOrders().then(orders => { 
				let id = this.trip._id
				this.orders = orders.filter(order => order.tripId === id);
			 })
		},
	}
	
</script>

<style>
	.box {
		max-width: 50%;
	}
</style>