<template>
	<div class="card" :user="user">
	<div class="card-content">
		<div class="media">
			<div class="media-left">
				<figure class="image is-128x128">
					<img v-if="user.image" :src="user.image" alt="profile photo" width='100' height='150'>
					<img v-else src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
				</figure>
			</div>
			<div class="media-content">
				<p class="title is-4">{{user.firstName}} {{user.lastName}}</p>
				<p class="subtitle is-5">@{{user.username}}</p>
				<p class="subtitle is-6">Current country - {{ user.country }}</p>
			</div>
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
	}
	
</script>

