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
				<div class="column is-7">
					<p class="title is-2" id='travel'>Going to travel?</p>
					<ol>
						<li>Register your travel</li>
						<li>Get baggage sharing requests</li>
						<li>Schedule your apointment with client</li>
						<li>Meet the client</li>
						<li>Earn money</li>
					</ol>
					<router-link to="/trips/new"><span class="button is-primary is-large is-outlined">Register your new trip</span></router-link>
					
				</div>
				<hr>
				<div class="column is-7">
					<p class="title is-2">Looking for a special food?</p>
					<ol>
						<li>Search for a traveler</li>
						<li>Book free space in traveler's baggage</li>
						<li>Schedule the pick up</li>
						<li>Pick up your order</li>
						<li>Enjoy tasty food</li>
					</ol>
					<router-link to="/trips"><span class="button is-primary is-large is-outlined">Make an order</span></router-link>
				</div>
			</div>
		</section>
	</div>	
</template>

<script>
	
</script>

<style scoped>
ol {
	padding: 4% 7%;
}
.container {
	padding: 4% 7%;
}
@media screen and (min-width: 769px) {
 #img-about {
	background-image:  url('../assets/flight-seat-travel.jpg'),
	url('../assets/kitkat-wasabi.jpg');
	background-repeat: no-repeat, repeat;
	background-position: left, right;
	background-size: 50% 100%;
 }
 li {
 	font-size: 1.2rem;
 	line-height: 1.5;
 }
  h2.title {
 	font-size: 4rem;
 }
}

@media screen and (max-width: 768px) {
	#travel {
		margin-top: 15px;
	}
	 #img-about {
		background-image:  url('../assets/flight-seat-travel-S.jpg');
		background-repeat: no-repeat;
		background-position: center;
	 }
 }

 h2.title {
 	text-shadow: 2px 3px 5px grey; 
 	text-shadow: 2px 3px 5px black;
 }

 li {
 	font-size: 1.5rem;
 	line-height: 2;
 }
</style>