import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { isMobile } from 'mobile-device-detect';

import '@/assets/scss/base/_reset-eric.scss';
import '@/assets/scss/vars/_variables-m.scss';
import '@/assets/scss/_global.scss';

Vue.use(VueRouter);

const Event = () => import('@/fok2019wish/components/Index.vue');
const Store = () => import('@/fok2019wish/components/Store.vue');
const Gallery = () => import('@/fok2019wish/components/Gallery.vue');

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/2019wishM',
      name: 'event',
      component: Event
    },
    {
      path: '/2019wishM/storelist',
      name: 'store',
      component: Store
    },
    {
      path: '/2019wishM/gallery',
      name: 'gallery',
      component: Gallery
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
