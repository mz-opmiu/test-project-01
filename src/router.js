import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Error404 = () => import('@/error/components/404.vue');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'error404',
      component: Error404
    },

    {
      path: '*',
      redirect: '/2019wish'
    }
  ]
});
