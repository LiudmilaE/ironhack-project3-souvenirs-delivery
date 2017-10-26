<template>
	<div class="card" :trip="trip">
		<header class="card-header">
			<p class="card-header-title">
				Trip
			</p>
			<!-- <a href="#" class="card-header-icon" aria-label="more options">
				<span class="icon">
					<i class="fa fa-angle-down" aria-hidden="true"></i>
				</span>
			</a> -->
		</header>
		<div class="card-content">
			<div class="content">
				<p>Trip from {{ trip.from }} to {{ trip.to }}.</p>
				<p>Traveler {{ trip.travelerId }}</p>
				<time>{{ trip.tripDate }}</time>
			</div>
		</div>
		<footer class="card-footer" v-if="user && trip.travelerId === user._id">
			<!-- <a href="#" class="card-footer-item">Save</a> -->
			<a href="#" class="card-footer-item">Edit</a>
			<a href="#" class="card-footer-item">Delete</a>
		</footer>
	</div>
</template>

<script>
	import { showTrips, updateTrip, deleteTrip } from '@/api/trips' // ?? maybe update delete only in profile


	export default {
		data () {
			return {
				user: this.$root.user || null,
			}
		},
		props: ['trip'],
		methods: {
			updateTrip() {

			},
			delete () {
				// logout(this.$root);
				delete
				this.$router.push('/');
			}
	}
	}
	
</script>