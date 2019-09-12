import Vue    from 'vue';
import Router from 'vue-router';
import Red    from './views/Red';
import Yellow from './views/Yellow';
import Green  from './views/Green';

Vue.use(Router);

const router = new Router({
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
  ],
});


router.beforeEach((to, from, next) => {
  localStorage.setItem('LAST_FIRE', from.name);
  next();
});

export default router;
