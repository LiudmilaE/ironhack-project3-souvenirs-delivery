<template>
	<div class="container">
		<b-notification v-if="error" type="is-danger" has-icon>
			{{ error.message }}
		</b-notification>
		<form @submit.prevent="">
			<b-field label="Country, you will travel from">
				<b-select
          v-model="from"
          icon="globe"
          icon-pack="fa">
          <option disabled value="">Please select one</option>
          <option v-for="option in options" :value="option">{{option}}</option>
        </b-select>
			</b-field>

			<b-field label="Country, you are going to">
				<b-select
          v-model="to"
          icon="globe"
          icon-pack="fa">
          <option disabled value="">Please select one</option>
          <option v-for="option in options" :value="option">{{option}}</option>
        </b-select>
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
				options: [
					'Ukraine',
					"France"
				],
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
