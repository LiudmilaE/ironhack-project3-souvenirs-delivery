<template>
	<div class="card" :trip="trip">
		<header class="card-header">
			<p class="card-header-title">
				Trip from {{ trip.from }} to {{ trip.to }}.
			</p>
		</header>
		<div class="card-content">
			<div class="content">
				<p>View traveler details {{ trip.travelerId }}</p>
				<p v-if="trip.acceptOrders">Still accept orders</p>
				<p v-else>Stoped accept orders</p>
				<p>Delivery price {{ trip.deliveryPrice }}</p>
				<time>{{ trip.tripDate }}</time>
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
	import TripEditForm from '@/components/TripEditForm'
	import { showTrips, updateTrip, deleteTrip } from '@/api/trips' // ?? maybe update delete only in profile


	export default {
		data () {
			return {
				user: this.$root.user || null,
				isComponentModalActive: false,
				order: '',
				showForm: false,
			}
		},
		components: {
      OrderForm,
      TripEditForm,
    },
		props: ['trip'],
		methods: {
			deleteTrip () {
				// let id = this.id
				deleteTrip(this.trip._id);
				this.$router.push('/');
			}
		}
	}
	
</script>