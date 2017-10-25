<template>
	<div class="container">
		<p  v-if="$root.user">Hi, {{ $root.user }}!</p>
		<br>

		<router-link to="/trips/new"><span class="button is-primary is-large is-outlined" id="trip-btn">Register your trip</span></router-link>
		<br>
	</div>
</template>

<script>
	import UserCard from '@/components/UserCard'

	export default {
		data () {
			return {
				user: this.$root.user || null,
			}
		},
		components: {
			UserCard,
		},
		methods: {
			search () {
				searchUser(
					console.log('searchUser was called!'));
			}
		}
	}
</script>