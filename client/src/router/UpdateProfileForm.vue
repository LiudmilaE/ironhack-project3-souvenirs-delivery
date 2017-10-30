<template>
	<div>
		<h3>Edit your account</h3>
		<pre>{{ $root.user }}</pre>
		Your avatar
		<img :src="imgUrl" v-if="imgUrl">
		<form @submit.prevent="uploadPicture">
			<input type="file" name="picture" @change="picture = $event.target.files[0]">
			<br>
			<button>Send</button>
		</form>
		<button @click.prevent="imgUrl='https://res.cloudinary.com/he3fnadts/image/upload/v1509390814/my-images/zojxklmlsnwrp2h2hc5o.jpg'">Update profile</button>
	</div>
</template>

<script>
	import { uploadPicture } from '@/api/auth'
	import { updateUser } from '@/api/auth'

export default {
	data () {
		return {
			error: null,
			picture: '',
			imgUrl: ''
		}
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