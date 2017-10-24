<template>
	<div>
		<section class="hero is-primary is-medium">
			<div class="hero-body" id="img-hero">
				<div class="container">
					<h1 class='title'>Souvenir Delivery</h1>
					<h2 class="subtitle">There is always something tasty to discover in any country!</h2>
				</div>
				<p  v-if="$root.user">Hi, {{ $root.user.firstName }}!</p>
			</div>
		</section>
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
					<h2 class="title">
						Earn extra income
					</h2>
					<h3 class="subtitle">
						Register your spare space in baggage while traveling, bring tasty food from your hometown and earn some extra income
					</h3>
					<button class="button is-primary is-large is-inverted is-outlined" id="trip-btn">Register your trip</button>
				</div>
			</div>
		</section>
			
	</div>
</template>

<style scoped>
 #img-hero {
	background-image: url('../assets/globe-map-world-XL.jpg');
	background-repeat: cover;
	background-position: center;
 }
 #trip-btn {
 	margin: 10px 45%;
 }

</style>