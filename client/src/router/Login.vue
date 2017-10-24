<template>
	<div>
		<form @submit.prevent="login">
			<b-field label="Username">
						<b-input v-model="username" maxlength="50"></b-input>
				</b-field>

				<b-field label="Password">
						<b-input type="password" v-model="password" password-reveal></b-input>
				</b-field>

			<button class="button is-primary">Login</button>
		</form>
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
	.modal-card {
		width: auto;
	}
	form {
		max-width: 400px;
		margin: auto;
	}
</style>