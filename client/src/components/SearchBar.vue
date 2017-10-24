<template>
	<section class="container">
		<b-field>
      <b-input placeholder="Search..."
          type="search"
          icon="search" expanded>
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
	export default {
		data () {
			return {
				travelers: [],
				query: ''
			}
		},
		methods: {
			search () {
				searchTraveler(
					console.log('searchTraveler was called!'));
			}
		}
	}
</script>