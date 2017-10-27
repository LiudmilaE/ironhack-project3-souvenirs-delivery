<template>
	<div class="card" :order="order">
		<header class="card-header">
			<p class="card-header-title">
				Order of {{ order.souvenirTitle }}.
			</p>
		</header>
		<div class="card-content">
			<div class="content">
				<p>Description:</p>
				<p> {{ order.description }}</p>
			</div>
			<!-- <trip-edit-form v-if="showForm" :trip="trip"></trip-edit-form> -->
		</div>
		<footer class="card-footer" v-if="user && order.clientId === user._id">
			<a href="#" @click.prevent="deleteOrder" class="card-footer-item">Delete</a>
		</footer>
	</div>
</template>

<script>
	import { deleteOrder } from "@/api/orders"

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
			}
		}
	}
</script>