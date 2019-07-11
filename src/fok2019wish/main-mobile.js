import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './AppMobile.vue';
import { isMobile } from 'mobile-device-detect';

import '@/assets/scss/base/_reset-eric.scss';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/m/2019wish',
      name: 'event',
      component: () => import('@/fok2019wish/components/Index.vue')
    },
    {
      path: '/m/2019wish/storelist',
      name: 'store',
      component: () => import('@/fok2019wish/components/Store.vue')
    },
    {
      path: '/m/2019wish/gallery',
      name: 'gallery',
      component: () => import('@/fok2019wish/components/Gallery.vue')
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
