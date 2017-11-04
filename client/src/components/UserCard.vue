<template>
	<div class="card" :user="user">
	<div class="card-content">
		<div class="media">
			<div class="media-left">
				<figure class="image is-128x128">
					<img v-if="user.image" :src="user.image" alt="profile photo" width='100' height='150'>
					<img v-else src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
				</figure>
			</div>
			<div class="media-content">
				<p class="title is-4">{{user.firstName}} {{user.lastName}}</p>
				<p class="subtitle is-5">@{{user.username}}</p>
				<p class="subtitle is-6">Current country - {{ user.country }} <flag class="flag" :iso="countryISO"/></p>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { countriesDB } from '@/api/trips'

	export default {
		data () {
			return {
			}
		},
		props: ['user'],
		computed: {
				countryISO () {
					if(!this.user.iso) {
							
						let c = this.user.country
						let countries = countriesDB()
						let country = countries.find(country => country.name === c);
						if (country){
							return country.code
						}
					return "fr"
					}
					return this.user.iso
			},
		},
	}
	
</script>

<style skoped>
	.flag {
		-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.1) inset;
			 -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.5) inset;
						box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.1) inset;
	}
</style>

