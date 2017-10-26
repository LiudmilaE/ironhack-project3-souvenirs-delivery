<template>
		<form @submil.prevent="addOrder" :trip="trip">
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Fill details of your order</p>
			</header>
			<section class="modal-card-body">
				<b-field label="Souvenir Title">
					<b-input
						type="text"
						v-model="souvenirTitle"
						placeholder="KitKat Melon"
						required>
					</b-input>
				</b-field>
				<b-field label="Description">
					<b-input
							type="textarea"
							v-model="description"
							placeholder="Description of the souvenir"
							required>
					</b-input>
				</b-field>
			</section>
			<footer class="modal-card-foot">
				<button class="button" type="button" @click="$parent.close()">Close</button>
				<button class="button is-primary" type="submit">Add order</button>
			</footer>
		</div>
	</form>
</template>

<script>
	import { addOrder } from '@/api/orders'

	export default {
		data(){
			return {
				souvenirTitle: '',
				description: '',
			}
		},
		props: ['trip'],
		methods: {
			addOrder () {
				let orderInfo = {
					travelerId: this.trip.travelerId,
					tripId: this.trip._id,
					souvenirTitle: this.souvenirTitle,
					description: this.description,
				};
				addOrder(orderInfo);
				console.log(orderInfo);
				this.$router.push('/');
				}
			}
	}
</script>

<style scoped>
		.modal-card {
				width: auto;
		}
</style>
