<template>
	<div class="container">
		<!-- <a href="/auth/facebook">Login With Facebook</a> -->
		<!-- <hr>OR -->
		<form @submit.prevent="login">
			<b-field label="Username">
						<b-input v-model="username" maxlength="50" autofocus v-focus></b-input>
				</b-field>

				<b-field label="Password">
						<b-input type="password" v-model="password" password-reveal></b-input>
				</b-field>

			<button class="button is-primary">Login</button>
		</form>
		<p class="has-text-centered">You don't have an account yet? 
			<router-link v-if="!$root.user" to="/signup">
				Signup
			</router-link>
		</p>
	</div>
</template>

<script>

	import { login } from '@/api/auth';

	export default {
		data () {
			return {
				username: '',
				password: '',
			}
		},
		methods: {
			login () {
				login(this.username, this.password, this.$root)
				.then(data => {
					this.$router.push('/')
				});
			},
		},
	}
</script>

<style scoped>
.container {
	padding: 5%;
}
	.modal-card {
		width: auto;
	}
	form {
		max-width: 340px;
		margin: 10px auto;
	}
</style>