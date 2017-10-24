<template>
	<section class="container">
		<b-field>
      <b-input placeholder="Search..."
          type="search"
          icon="search" expanded v-model="query">
      </b-input>
      <p class="control">
        <button class="button is-primary">Search</button>
      </p>
    </b-field>

		<div v-if="travelers.length>0">
			<traveler-card>Here will be info about traveler</traveler-card>
		</div>
	</section>
</template>

<script>
	import UserCard from '@/components/UserCard'

	export default {
		data () {
			return {
				travelers: [],
				query: ''
			}
		},
		components: {
			UserCard,
		},
		methods: {
			search () {
				searchTraveler(
					console.log('searchTraveler was called!'));
			}
		}
	}
</script>