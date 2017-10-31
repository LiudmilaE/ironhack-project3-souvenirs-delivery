<template>
	<div class="container">
		<b-notification v-if="error" type="is-danger" has-icon>
			{{ error.message }}
		</b-notification>
		<form @submit.prevent="addTrip">
			<b-field label="Country, you will travel from">
				<b-select
					v-model="from"
					icon="globe"
					icon-pack="fa" v-focus>
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

			<b-field label="Trip Start Date">
				<b-input type="date" v-model="tripDate" required maxlength="30"></b-input>
			</b-field>
			
			<b-field label="Trip End Date">
				<b-input type="date" v-model="endTripDate" required maxlength="30"></b-input>
			</b-field>

			<b-field label="Delivery Price in USD">
				<b-input type="number" v-model="deliveryPrice" required maxlength="30"></b-input>
			</b-field>

			<button class="button is-primary">Add trip details</button>
		</form>
	</div>
</template>

<script>
	import { addTrip } from '@/api/trips'

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
				endTripDate: '',
				deliveryPrice: '',
				error: null
			}
		},
		methods: { 
			addTrip () {
				this.error = null;
				addTrip({
					from: this.from,
					to: this.to,
					tripDate: this.tripDate,
					endTripDate: this.endTripDate,
					deliveryPrice: this.deliveryPrice,
				})
				.then(() => {
					this.$router.push('/');
				}).catch(err => {
					this.error = err.response.data.error
					console.error('Trip add err', err.response.data.error);
				});
				
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
