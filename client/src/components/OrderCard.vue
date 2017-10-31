<template>
	<div class="box order" :order="order">
		<header class="card-header">
			<p class="card-header-title">
				<span class="emoji">&#x23F3</span>
				Order of {{ order.souvenirTitle }}.
			</p>
		</header>
		<div class="card-content">
			<div class="content">
				<p>{{ order.description }}</p>
			</div>
			<!-- <trip-edit-form v-if="showForm" :trip="trip"></trip-edit-form> -->
		</div>
		<footer class="card-footer" v-if="user && order.clientId === user._id">
			<!--TODO
			 <a href="#" @click.prevent="deleteOrder" class="card-footer-item" v-if="order.status==='accepted'">Done</a> -->
			<a href="#" @click.prevent="deleteOrder" class="card-footer-item"><i class="fa fa-times" aria-hidden="true"></i>Delete</a>
		</footer>
		<footer class="card-footer" v-if="user && order.travelerId === user._id && order.status === 'pending'">
			<a href="#" @click.prevent="acceptOrder" class="card-footer-item"><i class="fa fa-handshake-o" aria-hidden="true"></i>Accept request</a>
			<a href="#" @click.prevent="rejectOrder" class="card-footer-item"><i class="fa fa-times" aria-hidden="true"></i>Reject request</a>
		</footer>
	</div>
</template>

<script>
	import { deleteOrder, updateOrder } from "@/api/orders"

	export default {
		data () {
			return {
				user: this.$root.user || null,
			}
		},
		props: ['order'],
		methods: {
			deleteOrder () {
				// let id = this.id
				deleteOrder(this.order._id);
				this.$router.push('/');
			},
			acceptOrder () {
				this.error = null;
				let data = {
					status: "accepted",
				};
				updateOrder(this.order._id, data)
					.then(() => {
					this.$router.push('/');
				}).catch(err => {
					this.error = err.response.data.error
					console.error('Order edit err', err.response.data.error);
				});
			},
			rejectOrder () {
				this.error = null;
				let data = {
					status: "rejected",
				};
				updateOrder(this.order._id, data)
					.then(() => {
					this.$router.push('/');
				}).catch(err => {
					this.error = err.response.data.error
					console.error('Order edit err', err.response.data.error);
				});
			}
		}
	}
</script>

<style scoped>

</style>