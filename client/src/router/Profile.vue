<template>
	<div class="container">
		<p  v-if="$root.user">Hi, {{ $root.user.firstName }}!</p>
		<br>
		<user-card :user="user"></user-card>
		<br>

		<router-link to="/trips/new"><span class="button is-primary is-large is-outlined" id="trip-btn">Register your new trip</span></router-link>
		<br>
	</div>
</template>

<script>
	import UserCard from '@/components/UserCard'
	import TripCard from '@/components/TripCard'

	export default {
		data () {
			return {
				user: this.$root.user || null,
				trips: []
			}
		},
		components: {
			UserCard,
			TripCard
		},
		methods: {
			findUserTrips(userId){
				console.log('findUserTrips was called');
			},
			findUserOrders(){
				console.log('findUserOrders was called');
			},
		}
	}
</script>