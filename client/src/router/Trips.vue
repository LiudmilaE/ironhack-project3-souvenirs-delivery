<template>
	<article class="container">
		<section class="notification">
			<h2 class="title"><span class="emoji">&#x1F5FA</span>Trips Page </h2>
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
				this.trips = trips
			 })

		}
	}
	
</script>