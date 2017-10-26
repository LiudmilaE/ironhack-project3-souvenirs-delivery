<template>
	<div class="card" :trip="trip">
		<header class="card-header">
			<p class="card-header-title">
				Trip from {{ trip.from }} to {{ trip.to }}.
			</p>
			<!-- <a href="#" class="card-header-icon" aria-label="more options">
				<span class="icon">
					<i class="fa fa-angle-down" aria-hidden="true"></i>
				</span>
			</a> -->
		</header>
		<div class="card-content">
			<div class="content">
				<p>Traveler {{ trip.travelerId }}</p>
				<p>Delivery price {{ trip.deliveryPrice }}</p>
				<time>{{ trip.tripDate }}</time>
			</div>
		</div>
		<footer class="card-footer" v-if="user && trip.travelerId === user._id">
			<!-- <a href="#" class="card-footer-item">Save</a> -->
			<a href="#" class="card-footer-item">Edit</a>
			<a href="#" class="card-footer-item">Delete</a>
		</footer>
		<footer class="card-footer" v-if="user && trip.acceptOrders && trip.travelerId !== user._id">
        <button class="button is-primary is-medium"
            @click="isComponentModalActive = true">
            Add Order
        </button>

        <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <order-form v-bind="formProps"></order-form>
        </b-modal>
		</footer>
	</div>
</template>

<script>
	import OrderForm from '@/components/OrderForm'
	import { showTrips, updateTrip, deleteTrip } from '@/api/trips' // ?? maybe update delete only in profile


	export default {
		data () {
			return {
				user: this.$root.user || null,
				isComponentModalActive: false,
				order: ''
			}
		},
		components: {
      OrderForm
    },
		props: ['trip'],
		methods: {
			updateTrip() {

			},
			delete () {
				// logout(this.$root);
				deleteTrip();
				this.$router.push('/profile');
			}
	}
	}
	
</script>