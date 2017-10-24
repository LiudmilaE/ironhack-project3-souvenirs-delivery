<template>
	<div class="container">
		<b-notification v-if="error" type="is-danger" has-icon>
			{{ error.message }}
		</b-notification>
		<form @submit.prevent="">
			<b-field label="From">
				<b-input v-model="from" required maxlength="30"></b-input>
			</b-field>

			<b-field label="To">
				<b-input type="text" v-model="to" required maxlength="30"></b-input>
			</b-field>

			<b-field label="Trip Date">
				<b-input type="date" v-model="tripDate" required maxlength="30"></b-input>
			</b-field>

			<b-field label="Delivery Price">
				<b-input v-model="deliveryPrice" required maxlength="30"></b-input>
			</b-field>

			<button class="button is-primary">Add trip details</button>
		</form>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				from: '',
				to: '',
				tripDate: '',
				deliveryPrice: '',
				error: null
			}
		}
	}
</script>

<style scoped>
	form {
		max-width: 350px;
		margin: 10px auto;
	}
</style>
