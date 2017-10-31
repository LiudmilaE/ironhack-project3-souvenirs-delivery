<template>
	<div class="container has-text-centered">
		<div class="notification">
			<h3 class="title">Edit your account</h3>
			<pre>{{ user }}</pre>
			<section>
			<h4 class="subtitle">Your avatar</h4>
			<figure class="image is-128x128">
				<img v-if="user.image" :src="user.image" alt="profile photo">
				<img v-else :src="imgUrl" v-if="imgUrl" width='100' height='150'>
			</figure>
			<br>
				<form @submit.prevent="uploadPicture">
					<input type="file" name="picture" @change="picture = $event.target.files[0]">
					<br>
					<button>Send</button>
				</form>
			</section>
			<button @click.prevent="saveChanges">Update profile</button>
		</div>
	</div>
</template>

<script>
	import { uploadPicture, updateUser, showUser } from '@/api/auth'

export default {
	data () {
		return {
			error: null,
			picture: '',
			imgUrl: '',
			user: null
		}
	},
	created() {
		showUser(this.$root.user._id).then(user => {
					this.user = user;
				});
	},
	methods: {
		uploadPicture () {
			const formData = new FormData()
			formData.append('picture', this.picture)
			// you can add more information to the formdata
			formData.append('id', this.$root.user._id )
			uploadPicture(formData)
				.then(data => {
				console.log(data)
				this.imgUrl = data.secure_url
			})
		},
		saveChanges () {
			let data={};
			this.error = null;
			if(this.imgUrl){
				data = {
					image: this.imgUrl,
				};
			}
			updateUser(this.$root.user._id, data);
			this.$router.push('/profile');
		}
	}
}
</script>