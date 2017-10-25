<template>
	<section class="container">
		<h2 class="title">Trips Page {{ trips }}</h2>
		<div v-if="trips && trips.length>0">
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
		create() {
	    showTrips()
	     	.then(response => {
	      		this.trips = response.data;
						
						console.log(this.$el, response.data) // => 'not updated'
	      this.$nextTick(function () {
	        console.log(this.$el) // => 'updated'
	      })
			});
	  }
	}
	
</script>