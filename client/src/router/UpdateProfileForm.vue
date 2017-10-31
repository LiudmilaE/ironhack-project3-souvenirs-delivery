<template>
	<div class="container has-text-centered">
		<div class="notification">
			<h3 class="title">Edit your account</h3>
			<hr>
			<pre>{{ user }}</pre>
			<hr>
			
			<section class="tile is-anscestor">
				<div class="tile is-parent avatar-update">
	      <article class="tile is-6 is-child box">
	        <p class="title">Your avatar</p>
	        <p class="subtitle">With an image</p>
	         <figure class="image is-128x128 avatar-update">
							<img v-if="user.image" :src="user.image" alt="profile photo">
							<img v-else :src="imgUrl" v-if="imgUrl" width='100' height='150'>
							<img v-if="!user.image" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
						</figure>
						<hr>
						<form @submit.prevent="uploadPicture">
						<input type="file" name="picture" @change="picture = $event.target.files[0]">
						<button>Save avatar</button>
					</form>
	       	</article>

	       	
	     	</div>
				</section>

			<hr>
			<button @click.prevent="saveChanges" class="button is-primary is-large is-outlined">Update profile</button>
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
			user: showUser(this.$root.user._id) || this.$root.user || null,
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

<style scoped>
	.avatar-update {
		    justify-content: center;
	}
</style>