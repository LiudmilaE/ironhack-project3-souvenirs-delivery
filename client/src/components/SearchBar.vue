<template>
	<section class="container">
		<b-field>
      <b-input placeholder="Search by country..."
          type="search"
          icon="search" expanded v-model="query">
      </b-input>
      <p class="control">
        <router-link :to=" query ? '/trips?from='+query : '/trips' "><button class="button is-primary" id="search-btn">Search</button></router-link>
      </p>
    </b-field>
<!-- 
		<div v-if="trips.length>0">
			<trip-card>Here will be info about traveler</trip-card>
		</div> -->
	</section>
</template>

<script>
	import UserCard from '@/components/UserCard'
	import TripCard from '@/components/TripCard'
	import { showTrips } from '@/api/trips'

	export default {
		data () {
			return {
				trips: [],
				query: ''//country
			}
		},
		components: {
			UserCard,
			TripCard,
		},
		// methods: {
		// 	search () {
		// 		showTrips(this.query).then(response => {
		// 			this.trips = response.data;
		// 			});
		// 			//by country

		// 			console.log('searchTraveler was called!');
		// 	}
		// }
	}
</script>