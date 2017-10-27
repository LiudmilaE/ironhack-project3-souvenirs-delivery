<template>
	<div class="card" :user="user">
	<div class="card-content">
		<div class="media">
			<div class="media-left">
				<figure class="image is-96x96">
					<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
				</figure>
			</div>
			<div class="media-content">
				<p class="title is-4">{{user.firstName}} {{user.lastName}}</p>
				<p class="subtitle is-6">@{{user.username}}</p>
			</div>
		</div>

		<div class="content">
			Current country - {{ user.country }}.	
		</div>
	</div>
</div>
</template>

<script>
	export default {
		data () {
			return {}
		},
		props: ['user'],
		methods: {
			search () {
				searchTraveler(
					console.log('searchTraveler was called!'));
			}
		}
	}
	
</script>