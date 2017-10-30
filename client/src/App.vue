<template>
	<div id="app">
		<nav class="navbar is-primary" role="navigation" aria-label="main navigation" >
			<div class="navbar-brand">
				<router-link class="navbar-item" to="/">
					<span class="emoji"> &#x2708 </span>
					Souvenirs Delivery 
				</router-link>
				<a class="gh-btn navbar-item" title="Github" id="gh-btn" target="_blank" aria-label="Star on GitHub" href="https://github.com/LiudmilaE/ironhack-project3-souvenirs-delivery">
					<i class="fa fa-github fa-2" aria-hidden="true"></i>
				</a>

				<div class="navbar-burger burger" id="navBurger" data-target="navMenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id="navMenu" class="navbar-menu">
				<div class="navbar-end">
					<router-link v-if="!$root.user" to="/login" class="navbar-item toggle-item">
							Login
					</router-link>
					<router-link v-if="!$root.user" to="/signup" class="navbar-item toggle-item">
							Signup
					</router-link>
					<router-link to="/about" class="navbar-item toggle-item">
							How does it work?
					</router-link>
					<router-link v-if="$root.user" to="/profile" class="navbar-item toggle-item">
							My Profile
					</router-link>
					<a class="navbar-item" @click.prevent="logout" v-if="$root.user" href="#">
							Logout
					</a>
				</div>
			</div>
		</nav>

		<div>
			<router-view/>
		</div>

		<footer class="footer">
			<div class="container">
				<div class="content has-text-centered">
					<p> &copy;
						<strong>Souvenirs Delivery</strong> by <a href="https://www.linkedin.com/in/liudmyla-iefremova/" target="_blank">Liudmyla Iefremova</a>. The source code is available on
						<a href="https://github.com/LiudmilaE/ironhack-project3-souvenirs-delivery" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>. Powered by <a target="_blank" href="https://vuejs.org/" ><img src="./assets/logo.png" id="vue-logo" alt="Vue.js"></a>
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
//for navbar
document.addEventListener('DOMContentLoaded', function () {

	// Get all "navbar-burger" elements
	var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	var toggleItems = Array.prototype.slice.call(document.querySelectorAll('.toggle-item'), 0);

	// Check if there are any navbar burgers
	if (navbarBurgers.length > 0) {

		// Add a click event on each of them
		navbarBurgers.forEach(function (el) {
			el.addEventListener('click', function () {

				// Get the target from the "data-target" attribute
				var target = el.dataset.target;
				var $target = document.getElementById(target);

				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}

	if(toggleItems.length > 0) {
		toggleItems.forEach(function (el) {
			el.addEventListener('click', function () {
				var nav = document.getElementById("navMenu");
				var burger = document.getElementById("navBurger");
				if(nav.className == "navbar-menu is-active") {
					nav.className = "navbar-menu";
			 		burger.className = "navbar-burger burger"
				}
			});
		}
	);
}
})
//end of the code for navbar


import { logout } from '@/api/auth'

export default {
	name: 'app',
	methods: {
		logout () {
			logout(this.$root);
			this.$router.push('/');
		},
	}
}
</script>

<style>
@media screen and (min-width: 769px) {
.trip, .order {
		max-width: 50%;
	}
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
#vue-logo {
	height: 15px;
	width: 15px;
}
.emoji {
	margin-right: 15px;
}
#app {
	margin-top: 0;
}
.container {
	padding-top: 40px;
	padding-bottom: 20px;
}
.fa-2 {
	font-size: 1.5rem;
}
.navbar {
	font-size: 1.2rem;
}
</style>
