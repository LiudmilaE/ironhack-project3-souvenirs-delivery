<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-end">
        <router-link v-if="!$root.user" to="/login" class="navbar-item">
            Login
        </router-link>
        <router-link v-if="!$root.user" to="/signup" class="navbar-item">
            Signup
        </router-link>
        <a class="navbar-item" @click.prevent="logout" v-if="$root.user" href="#">
            Logout
        </a>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { logout } from '@/api/auth'

export default {
  name: 'app',
  methods: {
    logout () {
      logout(this.$root);
      this.$rooter.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
