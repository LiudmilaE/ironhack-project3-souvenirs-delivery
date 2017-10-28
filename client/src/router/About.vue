<template>
	<div>
		<section class="hero is-info is-medium has-text-centered">
			<div class="hero-body" id="img-about">
				<div class="container">
					<h2 class="title is-1">How does it work?</h2>
				</div>
			</div>
		</section>

		<section class="container">
			<div class="columns is-vcentered">
				<div class="column is-6">
					<p class="title has-text-centered">Going to travel?</p>
					<ol>
						<li>Search for a traveler</li>
						<li>Book free space in traveler's baggage</li>
						<li>Schedule the pick up</li>
						<li>Pick up your order</li>
						<li>Enjoy tasty food</li>
					</ol>
					<router-link to="/trips"><span class="button is-primary is-large is-outlined">Make an order</span></router-link>
				</div>
				<div class="column is-6">
					<p class="title has-text-centered">Looking for a special food?</p>
					<ol>
						<li>Register your travel</li>
						<li>Get baggage sharing requests</li>
						<li>Schedule your apointment with client</li>
						<li>Meet the client</li>
						<li>Earn money</li>
					</ol>
					<router-link to="/trips/new"><span class="button is-primary is-large is-outlined">Register your new trip</span></router-link>
				</div>
			</div>
		</section>
	</div>	
</template>

<script>
	
</script>

<style scoped>
 #img-about {
	background-image:  url('../assets/flight-seat-travel-M.jpg'),
	url('../assets/kitkat-wasabi-M.jpg');
	background-repeat: no-repeat,
		 no-repeat;
	background-position: left,
		 right;
/*	padding-bottom: 10rem;
 	padding-top: 10rem;*/
 }
 h2 {
 	text-shadow: 1px 1px 2px grey; 
 }
</style>