<template>
	<div class="container" :trip="trip">
		<b-notification v-if="error" type="is-danger" has-icon>
			{{ error.message }}
		</b-notification>
		<form @submit.prevent="trip ? updateTrip : addTrip">
			<b-field label="Country, you will travel from">
				<b-select
          v-model="from"
          icon="globe"
          icon-pack="fa">
          <option disabled value="">Please select one</option>
          <option v-for="option in options" :value="option">{{option}}</option>
        </b-select>
			</b-field>

			<b-field label="Country, you are going to">
				<b-select
          v-model="to"
          icon="globe"
          icon-pack="fa">
          <option disabled value="">Please select one</option>
          <option v-for="option in options" :value="option">{{option}}</option>
        </b-select>
			</b-field>

			<b-field label="Trip Date">
				<b-input type="date" v-model="tripDate" required maxlength="30"></b-input>
			</b-field>

			<b-field label="Delivery Price in USD">
				<b-input type="number" v-model="deliveryPrice" required maxlength="30"></b-input>
			</b-field>

			<button class="button is-primary">Add trip details</button>
		</form>
	</div>
</template>