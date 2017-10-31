<template>
	<div class="box" :trip="trip">
		<b-notification v-if="error" type="is-danger" has-icon>
			{{ error.message }}
		</b-notification>
		<form @submit.prevent="updateTrip">
			<b-field label="Trip Date">
				<b-input type="date" v-model="tripDate" required maxlength="30" v-focus></b-input>
			</b-field>

			<b-field label="Trip End Date">
				<b-input type="date" v-model="endTripDate" required maxlength="30"></b-input>
			</b-field>

			<b-field label="Still has space to accept orders?">
				<div class="field">
								<b-checkbox v-model="acceptOrders">
										{{ acceptOrders ? "Yes" : "No"}}
								</b-checkbox>
						</div>
			</b-field>

			<b-field label="Delivery Price in USD">
				<b-input type="number" v-model="deliveryPrice" required maxlength="30"></b-input>
			</b-field>

			<button class="button is-primary">Edit trip details</button>
		</form>
	</div>
</template>

<script>
	import { updateTrip } from '@/api/trips'

	export default {
		data () {
			return {
				tripDate: '',
				endTripDate: '',
				deliveryPrice: '',
				acceptOrders: true,
				error: null
			}
		},
		props: ['trip'],
		methods: { 
			updateTrip () {
				this.error = null;
				let data = {
					acceptOrders: this.acceptOrders,
					tripDate: this.tripDate,
					endTripDate: this.endTripDate,
					deliveryPrice: this.deliveryPrice,
				};
				updateTrip(this.trip._id, data)
				.then(() => {
					this.$router.push('/');
				}).catch(err => {
					this.error = err.response.data.error
					console.error('Trip edit err', err.response.data.error);
				});
				
			} 
		},
	}
</script>