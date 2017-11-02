<template>
	<div class="card order" :order="order">
		<header class="card-header">
			<p class="card-header-title">
				<i class="fa fa-hourglass-o" aria-hidden="true" v-if="order.status === 'pending'"></i>
				<i class="fa fa-check-square-o" aria-hidden="true" v-if="order.status === 'accepted'"></i>
				{{ order.souvenirTitle }}<em v-if="user && (order.clientId === user._id || order.travelerId === user._id)">
				 / {{ order.status }}</em>
			</p>
			<span v-if ="user && order.travelerId !== user._id" class="card-header-icon">
				<span @click="showUserDetails(order.travelerId)">
					<i class="fa fa-address-card-o primary" aria-hidden="true"></i>
					Traveler details
				</span>

				<b-modal :active.sync="isModalActive" has-modal-card>
					<user-card :user="traveler"></user-card>
				</b-modal>
			</span>
		</header>
		<div class="card-content">
			<div class="content">
				<p>{{ order.description }}</p>
				<div v-if="user && (order.clientId === user._id || order.travelerId === user._id) && order.status === 'accepted'">
					<time>Pickup on {{ order.pickupDate | moment("dddd, MMMM Do YYYY") }}</time>
					<hr>
					<p v-if="order.travelerId === user._id || order.clientId === user._id">Want to change the pick up details?</p>
					<i class="fa fa-envelope-o" aria-hidden="true"></i>
					<em>{{ order.clientId === user._id ? emailTraveler : emailClient }}</em>
				</div>
				<p v-if="user && order.clientId === user._id && order.status === 'rejected'">Your request was rejected. Please, delete your order and try again</p>
			</div>
		</div>
		<footer class="card-footer" v-if="user && order.clientId === user._id && order.status !== 'accepted'">
			<!--TODO
			 <a href="#" @click.prevent="deleteOrder" class="card-footer-item" v-if="order.status==='accepted'">Done</a> -->
			<a href="#" @click.prevent="deleteOrder" class="card-footer-item danger"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</a>
		</footer>
		<footer class="card-footer" v-if="user && order.travelerId === user._id && order.status === 'pending'">
			<a href="#" @click.prevent="acceptOrder" class="card-footer-item success"><i class="fa fa-handshake-o" aria-hidden="true"></i>Accept request</a>
			<a href="#" @click.prevent="rejectOrder" class="card-footer-item danger"><i class="fa fa-times" aria-hidden="true"></i>Reject request</a>
		</footer>
	</div>
</template>

<script>
	import { deleteOrder, updateOrder } from "@/api/orders"
	import { showUser } from '@/api/auth'
	import UserCard from '@/components/UserCard'

	export default {
		data () {
			return {
				user: this.$root.user || null,
				emailTraveler: '',
				emailClient: '',
				contactShow: false,
				isModalActive: false,
				traveler: ''
			}
		},
		props: ['order'],
		created () {
			showUser(this.order.clientId).then(user => {
				this.emailClient = user.email;
			});
			showUser(this.order.travelerId).then(user => {
				this.emailTraveler = user.email;
			})
		
		},
		components: {
			UserCard
		},
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
			},
			showUserDetails (id) {
				showUser(id).then(user => {
				this.traveler = user;
				this.isModalActive = true;
			});
			}
		}
	}
</script>

<style skoped>
	li {
		cursor: pointer; /* "hand" cursor */
	}
	
</style>

