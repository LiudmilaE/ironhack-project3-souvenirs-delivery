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
					icon-pack="fa" expanded v-focus>
					<option disabled value="">Please select one</option>
					<option v-for="option in options" :value="option">{{option}}</option>
				</b-select>
			</b-field>

			<b-field label="Country, you are going to">
				<b-select
					v-model="to"
					icon="globe"
					icon-pack="fa" expanded>
					<option disabled value="">Please select one</option>
					<option v-for="option in options" :value="option">{{option}}</option>
				</b-select>
			</b-field>

			<b-field label="Select trip dates">
			<HotelDatePicker
				v-on:checkInChanged="getStartDate"
				v-on:checkOutChanged="getEndDate"
				:i18n="ptBr"
				/></HotelDatePicker>
				</b-field>

			<b-field label="Delivery Price in USD">
				<b-input type="number" v-model="deliveryPrice" required maxlength="3"></b-input>
			</b-field>

			<button class="button is-primary">Add trip details</button>
		</form>
	</div>
</template>

<script>
	import { addTrip } from '@/api/trips'
	import HotelDatePicker from 'vue-hotel-datepicker'
	import { listCountries } from '@/api/trips'

	export default {
		data () {
			return {
				from: '',
				ptBr: {
					night: 'Day',
					nights: 'Days',
					'day-names': ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
					'check-in': 'Start Date',
					'check-out': 'End Date',
					'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				},
				to: '',
				options: listCountries(),
				tripDate: '',
				endTripDate: '',
				deliveryPrice: '',
				error: null,
			}
		},
		methods: {
			getStartDate (date) {
				//console.log(date);
				this.tripDate = date;
			}, 
			getEndDate (date) {
				//console.log(date);
				this.endTripDate = date;
			}, 
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
					this.$router.push('/profile');
				}).catch(err => {
					this.error = err.response.data.error
					console.error('Trip add err', err.response.data.error);
				});
				
			} 
		},
		components: {
			HotelDatePicker,
		},
	}
</script>

<style scoped>
	form {
		max-width: 350px;
		margin: 10px auto;
	}
</style>
