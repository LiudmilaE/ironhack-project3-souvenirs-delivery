<template>
	<p  v-if="$root.user">Hi, {{ $root.user.firstName }}!</p>
</template>

<script>
	export default {
		
	}
</script>