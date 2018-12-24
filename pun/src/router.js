import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/happyness18you',
      name: 'happyness18you',
      component: () => import(/* webpackChunkName: "Happyness18you" */ './views/Happyness18you.vue'),
    },
    {
      path: '/justpun',
      name: 'justpun',
      component: () => import(/* webpackChunkName: "Justpun" */ './views/Justpun.vue'),
    },
  ],
});
