<template>
	<section class="container">
		<h2 class="title">Trips Page</h2>
		<div v-if="trips && trips.length>0" class="column">
			<trip-card v-for="trip in trips" :trip="trip"></trip-card>
		</div>
		<p class="subtitle" v-else>No trips found...</p>
	</section>
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