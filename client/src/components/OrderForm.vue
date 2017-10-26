<template>
		<form @submil.prevent="addOrder">
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Fill details of your order</p>
			</header>
			<section class="modal-card-body">
				<b-field label="Souvenir Title">
					<b-input
						type="text"
						v-model="souvenirTitle"
						placeholder="KitKat Melon"
						required>
					</b-input>
				</b-field>
				<b-field label="Description">
					<b-input
							type="textarea"
							v-model="description"
							placeholder="Description of the souvenir"
							required>
					</b-input>
				</b-field>
			</section>
			<footer class="modal-card-foot">
				<button class="button" type="button" @click="$parent.close()">Close</button>
				<button class="button is-primary">Add order</button>
			</footer>
		</div>
	</form>
</template>

<script>
    export default {
        props: ['souvenirTitle', 'description'],
        methods: {
        	addOrder () {
        		
        	}
        }
    }
</script>

<style scoped>
    .modal-card {
        width: auto;
    }
</style>
