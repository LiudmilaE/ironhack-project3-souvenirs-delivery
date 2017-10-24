<template>
	<div>
		<section class="hero is-info is-medium">
			<div class="hero-body" id="img-hero">
				<div class="container">
					<h1 class='title is-1'>Souvenir Delivery</h1>
					<h2 class="subtitle is-3">There is always something tasty to discover in any country!</h2>
				</div>
				
				<search-bar></search-bar>
			</div>
			
		</section>
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container has-text-centered">
					<h2 class="title is-2 is-spaced">
						Earn extra income
					</h2>
					<h3 class="subtitle is-3">Are you going to travel soon? Register your spare space in baggage, bring tasty food from your hometown and earn some extra income
					</h3>
					<router-link to="/trips/new"><span class="button is-primary is-large is-inverted is-outlined" id="trip-btn">Register your trip</span></router-link>
				</div>
			</div>
		</section>
			
	</div>
</template>

<script>
	import SearchBar from '@/components/SearchBar'

	export default {
		data() {
			return {}
		},
		components: {
			SearchBar,
		}
	}
</script>

<style scoped>
 #img-hero {
	background-image: url('../assets/globe-map-world-XL.jpg');
	background: cover;
	background-position: center;
/*	padding-bottom: 10rem;
 	padding-top: 10rem;*/
 }

</style>