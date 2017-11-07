<template>
	<div class="box" :trip="trip">
		<b-notification v-if="error" type="is-danger" has-icon>
			{{ error.message }}
		</b-notification>
		<form @submit.prevent="updateTrip">
			<b-field label="Select new dates">
			<HotelDatePicker
				v-on:checkInChanged="getStartDate"
				v-on:checkOutChanged="getEndDate"
				:i18n="ptBr"
				/></HotelDatePicker>
				</b-field>

			<b-field label="Still has space to accept orders?">
				<div class="field">
								<b-checkbox v-model="acceptOrders">
										{{ acceptOrders ? "Yes" : "No"}}
								</b-checkbox>
						</div>
			</b-field>

			<b-field label="Delivery Price in USD">
				<b-input type="number" v-model="deliveryPrice" required maxlength="3"></b-input>
			</b-field>

			<button class="button is-primary" @click="$parent.close()">Edit trip details</button>
		</form>
	</div>
</template>

<script>
	import { updateTrip } from '@/api/trips'
	import HotelDatePicker from 'vue-hotel-datepicker'

	export default {
		data () {
			return {
				tripDate: '',
				endTripDate: '',
				deliveryPrice: this.trip.deliveryPrice || '',
				acceptOrders: true,
				error: null,
				ptBr: {
					night: 'Day',
					nights: 'Days',
					'day-names': ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
					'check-in': 'Start Date',
					'check-out': 'End Date',
					'month-names': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				},
			}
		},
		props: ['trip'],
		methods: { 
			getStartDate (date) {
				this.tripDate = date;
			}, 
			getEndDate (date) {
				this.endTripDate = date;
			}, 
			updateTrip () {
				this.error = null;
				let data = {};
				if(this.tripDate){
					data.tripDate = this.tripDate;
				}
				if(this.endTripDate){
					data.endTripDate = this.endTripDate;
				}
				if(this.acceptOrders){
					data.acceptOrders = this.acceptOrders;
				}
				if(this.deliveryPrice){
					data.deliveryPrice = this.deliveryPrice;
				}

				updateTrip(this.trip._id, data)
				.then(trip => {
					this.$emit('updateTrip', trip);
				}).catch(err => {
					this.error = err.response.data.error
					console.error('Trip edit err', err.response.data.error);
				});
				
			} 
		},
		components: {
			HotelDatePicker,
		},
	}
</script>