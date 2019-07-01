import Vue from 'vue';
import Router from 'vue-router';

import Event from './fok2019wish/components/Index.vue';
import Store from './fok2019wish/components/Store.vue';
import Gallery from './fok2019wish/components/Gallery.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/2019wish',
      name: 'home',
      component: Event
    },
    {
      path: '/2019wish/storelist',
      name: 'store',
      component: Store
    },
    {
      path: '/2019wish/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '*',
      redirect: '/2019wish'
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});
