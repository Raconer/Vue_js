import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

export default router;