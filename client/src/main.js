// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import { checkUser } from '@/api/auth';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

// Register a global custom directive called v-focus
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    const tag = el.tagName.toLowerCase()
    if (tag !== 'input' && tag !== 'select') {
      el = el.querySelector('input, select')
    }
    // Focus the element
    if (el) el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data: {
  	user: null,
  },
  created() {
  	checkUser(this.$root);
  },
});
