<template>
	<p  v-if="$root.user">Hi, {{ $root.user }}!</p>
</template>

<script>
	import UserCard from '@/components/UserCard'

	export default {
		data () {
			return {
				user: this.$root.user || null,
			}
		},
		components: {
			UserCard,
		},
		methods: {
			search () {
				searchUser(
					console.log('searchUser was called!'));
			}
		}
	}
</script>