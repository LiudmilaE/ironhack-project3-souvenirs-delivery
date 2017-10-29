<template>
	<div>
		<section class="hero is-info is-medium">
			<div class="hero-body" id="img-hero">
				<div class="container">
					<h1 class='title is-1'>Souvenirs Delivery</h1>
					<h2 class="subtitle is-3">There is always something tasty to discover in any country!</h2>
				</div>
				
				<search-bar></search-bar>
			</div>
			
		</section>
		<section class="hero is-primary" id="extra-income">
			<div class="hero-body">
				<div class="container has-text-centered">
					<h2 class="title is-3 is-spaced">
						Earn extra income
					</h2>
					<h3 class="subtitle is-4">Are you going to travel soon? Register your spare space in baggage, bring tasty food from your hometown and earn some extra income
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
@media screen and (max-width: 768px) {
	#img-hero {
	background-image: url('../assets/globe-map-world-S.jpg');
	background: cover;
	background-position: center;
 	}
}

 #img-hero {
	background-image: url('../assets/globe-map-world-XL.jpg');
	background: cover;
	background-position: center;
 }
 #extra-income {
 	background: linear-gradient(141deg, #a894e0 0%, #7c62c4 51%, #7957d5 75%);
 }

 h1, h2 {
 	text-shadow: 1px 1px 2px grey; 
 }

</style>