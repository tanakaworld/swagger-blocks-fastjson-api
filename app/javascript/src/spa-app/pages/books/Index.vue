<template>
  <div>
    <h1>Books (SPA)</h1>

    <book-list :books="$store.getters['books/books']" @delete="onDelete" />

    <br />

    <router-link :to="{ name: 'book_new_path' }">New Book</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';
import PageFetchHook from '@spa-app/mixins/PageFetchHook';
import BookList from '@spa-app/components/books/BookList.vue';

import store from '@spa-app/store';
import * as BooksModule from '@spa-app/store/modules/books';

const fetch = async _params => {
  await store.dispatch(BooksModule.GetBooks.namespaced(null));
};

export default Vue.extend({
  mixins: [PageFetchHook(fetch)],
  components: {
    BookList
  },
  methods: {
    async onDelete(id: number) {
      await this.$store.dispatch(BooksModule.DeleteBook.namespaced({ id }));
      await this.$store.dispatch(BooksModule.GetBooks.namespaced(null));
    }
  }
});
</script>
