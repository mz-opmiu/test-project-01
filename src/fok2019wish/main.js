import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
Vue.use(VueRouter);

const Event = () => import('@/fok2019wish/components/Index.vue');
const Store = () => import('@/fok2019wish/components/Store.vue');
const Gallery = () => import('@/fok2019wish/components/Gallery.vue');

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/fok2019wish',
      name: 'event',
      component: Event
    },
    {
      path: '/fok2019wish/storelist',
      name: 'store',
      component: Store
    },
    {
      path: '/fok2019wish/gallery',
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
