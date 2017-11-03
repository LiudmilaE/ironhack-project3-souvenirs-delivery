<template>
	<section class="container" role="search">
		<form>
			<b-field>
				<b-input placeholder="Search by country you want souvenir from..."
						type="search"
						icon="search" expanded v-model="query" name="query" autofocus v-focus>
				</b-input>
				<p class="control">
					<router-link :to=" query ? '/trips?from='+query : '/trips' "><button class="button is-primary" id="search-btn">Search</button></router-link>
				</p>
			</b-field>
		</form>
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
	}
</script>