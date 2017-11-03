<template>
	<article class="container">
		<section class="notification">
			<h2 class="title"><span class="emoji">&#x1F5FA</span>Future trips list</h2>
			<h4 class="subtitle">Today is {{ new Date() | moment("dddd, MMMM Do YYYY") }}</h4>
			<div v-if="trips && trips.length>0" class="column">
				<trip-card v-for="trip in trips" :trip="trip" :key="trip.id"></trip-card>
			</div>
			<p class="subtitle" v-else>No trips found...</p>
		</section>
	</article>
</template>

<script>
	import TripCard from '@/components/TripCard'
	import { showTrips } from '@/api/trips'

	export default {
		data () {
			return {
				trips: []
			}
		},
		components: {
			TripCard,
		},
		created() {
			showTrips(this.$route.query).then(trips => { 
				let today = new Date();
				//only future trips starting from tomorrow
				this.trips = trips.filter(trip => {
					let date = new Date(trip.tripDate);
					return date > today});
			 })
		}, 
	}
	
</script>

<style scoped>
	@media screen and (min-width: 769px) {
		.notification {
			padding: 5% 15%;
		}
	}
</style>