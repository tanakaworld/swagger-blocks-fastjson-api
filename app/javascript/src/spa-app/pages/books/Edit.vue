<template>
  <div>
    <h1>Editing Book (SPA)</h1>

    <book-form :book="book" @submit="onSubmit" />

    <router-link :to="{ name: 'book_show_path', params: { book_id: book.id } }"
      >Show</router-link
    >
    |
    <router-link :to="{ name: 'books_path' }">Back</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';
import PageFetchHook from '@spa-app/mixins/PageFetchHook';
import BookForm from '@spa-app/components/books/Form.vue';

import store from '@spa-app/store';
import * as BooksModule from '@spa-app/store/modules/books';

const fetch = async params => {
  await store.dispatch(BooksModule.GetBook.namespaced({ id: params.book_id }));
};

export default Vue.extend({
  mixins: [PageFetchHook(fetch)],
  components: {
    BookForm
  },
  computed: {
    book() {
      return this.$store.getters['books/book'];
    }
  },
  methods: {
    async onSubmit(body) {
      const bookId = this.$route.params.book_id;
      await this.$store.dispatch(
        BooksModule.UpdateBook.namespaced({
          params: { id: bookId },
          body
        })
      );
      this.$router.push({ name: 'books_path' });
    }
  }
});
</script>
