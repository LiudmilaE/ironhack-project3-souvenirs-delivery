<template>
	<div id="app">
		<nav class="navbar is-primary" role="navigation" aria-label="main navigation" >
			<div class="navbar-brand">
				<router-link class="navbar-item" to="/">
					Sovenirs Delivery
				</router-link>
        <a class="gh-btn navbar-item" title="Github" id="gh-btn" target="_blank" aria-label="Star on GitHub" href="https://github.com/LiudmilaE/ironhack-project3-souvenirs-delivery">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        

				<div class="navbar-burger burger" data-target="navMenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id="navMenu" class="navbar-menu">
				<div class="navbar-end">
					<router-link v-if="!$root.user" to="/login" class="navbar-item">
							Login
					</router-link>
					<router-link v-if="!$root.user" to="/signup" class="navbar-item">
							Signup
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
		        <strong>Souvenir Delivery</strong> by <a href="https://www.linkedin.com/in/liudmyla-iefremova/" target="_blank">Liudmyla Iefremova</a>. The source code is available on
		        <a href="https://github.com/LiudmilaE/ironhack-project3-souvenirs-delivery" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>.
		      </p>
		    </div>
		  </div>
		</footer>
	</div>
</template>

<script>
import { logout } from '@/api/auth'

export default {
	name: 'app',
	methods: {
		logout () {
			logout(this.$root);
			this.$router.push('/');
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
#app {
	margin-top: 0;
}
.container {
	padding-top: 40px;
}
</style>
