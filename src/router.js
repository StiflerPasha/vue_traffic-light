import Vue from 'vue';
import Router from 'vue-router';
import Red from './views/Red';
import Yellow from './views/Yellow';
import Green from './views/Green';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/1',
      name: 'red',
      component: Red,
    },
    {
      path: '/2',
      name: 'yellow',
      component: Yellow,
    },
    {
      path: '/3',
      name: 'green',
      component: Green,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue'),
    },*/
  ],
});
