import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '@spa-app/pages/layouts/Default.vue';
import Books from '@spa-app/pages/books/Index.vue';
import BookEdit from '@spa-app/pages/books/Edit.vue';
import BookShow from '@spa-app/pages/books/Show.vue';
import BookNew from '@spa-app/pages/books/New.vue';
import Error404 from '@spa-app/pages/errors/404.vue';

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
      {
        path: `books/:book_id/edit`,
        component: BookEdit,
        name: 'book_edit_path'
      },
      {
        path: `books/:book_id`,
        component: BookShow,
        name: 'book_show_path'
      },
      {
        path: `books/new`,
        component: BookNew,
        name: 'book_new_path'
      },
      { path: '*', component: Error404, name: 'error_404' }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
