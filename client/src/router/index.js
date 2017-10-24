import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/login',
			component: Login,
		},
		{
			path: '/signup',
			component: Signup,
		},
	],
});