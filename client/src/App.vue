<template>
	<div id="app">
		<nav class="navbar is-primary" role="navigation" aria-label="main navigation" >
			<div class="navbar-brand">
				<router-link class="navbar-item" to="/">
					<i class="fa fa-plane" aria-hidden="true"></i>
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
							How does it work ?
					</router-link>
					<router-link v-if="$root.user" to="/profile" class="navbar-item toggle-item">
							<i class="fa fa-user-o" aria-hidden="true"></i> My Profile
					</router-link>
					<a class="navbar-item" @click.prevent="logout" v-if="$root.user" href="#">
							Logout
					</a>
				</div>
			</div>
		</nav>

		<div class="bg-img">
			<router-view/>
		</div>

		<footer class="footer">
			<div class="container">
				<div class="content has-text-centered">
					<p> &copy;
						<strong>Souvenirs Delivery</strong> by <a href="https://www.linkedin.com/in/liudmyla-iefremova/" target="_blank">Liudmyla Iefremova</a>. The source code is available on
						<a href="https://github.com/LiudmilaE/ironhack-project3-souvenirs-delivery" target="_blank"><i class="fa fa-github" aria-hidden="true"></i>GitHub</a>. Powered by <a target="_blank" href="https://vuejs.org/" ><img src="./assets/logo.png" id="vue-logo" alt="Vue.js"></a> &amp; <a target="_blank" href="https://ironhack-souvenirs-delivery.herokuapp.com/" ><img src="./assets/heroku-logo.png" id="heroku-logo" alt="Vue.js"></a>
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
@media screen and (max-width: 768px) {
	.notification {
		padding: 3%;
 	}
}
	@media screen and (min-width: 769px) {
	html {
		font-size: 20px;
		line-height: 1.2;
	}
	.order {
			max-width: 95%;
			margin-bottom: 5px;
		}
	}

	/*basic style*/
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
	}
	#vue-logo, #heroku-logo {
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
		padding-bottom: 30px;
	}
	.fa-2 {
		font-size: 1.5rem;
	}
	.navbar {
		font-size: 1.2rem;
	}

	.notification {
		-webkit-box-shadow: -1px -5px 100px -15px rgba(83,134,139,1);
			-moz-box-shadow: -1px -5px 100px -15px rgba(83,134,139,1);
				box-shadow: -1px -5px 100px -15px rgba(83,134,139,1);
				border-radius: 20px;

	}

	.card, .box {
			-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
	       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.5) inset;
	            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
		}

	section.notification a:not(.button) {
		text-decoration: none;
		color: #7957d5;
	}

	.notification .card-footer-item.danger {
		color: #ff3860;
	}

	.notification .card-footer-item.success {
		color: #23d160;
	}

	.box {
		margin-bottom: 1.5rem;
		margin-left: 3px;
	}
	i {
		margin-right: 7px;
	}
	i.info {
		color: #209cee;
	}
	i.primary {
		color: #7957d5;
	}
	/*button.datepicker__clear-button, .datepicker__close-button {
		color: #7957d5;
	}
	.datepicker__dummy-wrapper--is-active {
		
	}*/

</style>
