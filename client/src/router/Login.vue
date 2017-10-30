<template>
	<div class="container">
		<form @submit.prevent="login">
			<b-field label="Username">
						<b-input v-model="username" maxlength="50" autofocus></b-input>
				</b-field>

				<b-field label="Password">
						<b-input type="password" v-model="password" password-reveal></b-input>
				</b-field>

			<button class="button is-primary">Login</button>
		</form>
		<p class="has-text-centered">
You don't have an account yet? <router-link v-if="!$root.user" to="/signup">
				Signup
			</router-link></p>
	</div>
	<!-- <section>
		<button class="button is-primary is-medium"
						@click="isComponentModalActive = true">
						Login
		</button>

		<b-modal :active.sync="isComponentModalActive" has-modal-card>
			<login-form v-bind="formProps"></login-form>
		</b-modal>
	</section> -->
</template>

<script>
	import { login } from '@/api/auth';
	//import LoginForm from '@/components/LoginForm'

	export default {
		data () {
			return {
				username: '',
				password: '',
				// isComponentModalActive: false,
				// formProps: {
				// 	username: 'coco',
				// 	password: ''
				// }
			}
		},
		// components: {
		// 	LoginForm
		// },
		//props: ['email', 'password']
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