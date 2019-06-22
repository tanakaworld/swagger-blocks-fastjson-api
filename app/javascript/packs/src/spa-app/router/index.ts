import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '../pages/layouts/Default.vue';
import Books from '../pages/books/Index.vue';
import Error404 from '../pages/errors/404.vue';

const pathPrefix = 'app';
const routes = [
  {
    path: `/${pathPrefix}`,
    component: Layout,
    children: [
      {
        path: '',
        name: 'home_path',
        redirect: {
          name: 'books_path'
        }
      },
      { path: 'books', component: Books, name: 'books_path' },
      { path: '*', component: Error404, name: 'error_404' }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
