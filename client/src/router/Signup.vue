<template>
	<div class="container">
		<section class="notification">
		<b-notification v-if="error" type="is-danger" has-icon>
			{{ error }}
		</b-notification>
		<form @submit.prevent="signup">
			<b-field label="Username">
				<b-input v-model="username" required maxlength="30" autofocus v-focus></b-input>
			</b-field>

			<b-field label="Email">
				<b-input type="email" v-model="email" required maxlength="50"></b-input>
			</b-field>

			<b-field label="First Name">
				<b-input v-model="firstName" required maxlength="30"></b-input>
			</b-field>

			<b-field label="Last Name">
				<b-input v-model="lastName" required maxlength="30"></b-input>
			</b-field>

			<b-field label="Current country where you live">
				<b-select
					v-model="country"
					icon="globe"
					icon-pack="fa">
					<option disabled value="">Please select one</option>
					<option v-for="option in options" :value="option">{{option}}</option>			
				</b-select>
			</b-field>

			<b-field label="Password">
				<b-input
						type="password"
						required
						v-model="password"
						password-reveal
					>
				</b-input>
			</b-field>

			<button class="button is-primary">Signup</button>
		</form>
		<p class="has-text-centered">Already registered? <router-link v-if="!$root.user" to="/login">
			Login</router-link></p>
		</section>
	</div>
</template>

<script>
	import { signup } from '@/api/auth'
	import { listCountries } from '@/api/trips'

	export default {
		data () {
			return {
				error: null,
				username: '',
				email: '',
				password: '',
				firstName: '',
				lastName: '',
				country: '',
				options: listCountries(),
			}
		},
		methods: {
			signup () {
				this.error = null;
				signup({
					username: this.username,
					email: this.email,
					firstName: this.firstName,
					lastName: this.lastName,
					password: this.password,
					country: this.country,
				}).then(() => {
					this.$router.push('/login');
				}).catch(err => {
					this.error = err.response.data.error
					console.error('Signup err', err.response.data.error);
				});
			}
		}
	}
</script>

<style scoped>
@media screen and (min-width: 911px) {
		.notification {
			margin: 50px 25%;
 		}
	}
	@media screen and (min-width: 577px) {
		.notification {
			margin: 40px 15%;
 		}
	}

	577 911
.container {
	padding: 5%;
}
	form {
		max-width: 350px;
		margin: 10px auto;
	}
</style>