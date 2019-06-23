<template>
  <div>
    <h1>Detail Book (SPA)</h1>

    <p>
      <strong>Title:</strong>
      {{ book.title }}
    </p>

    <p>
      <strong>Description:</strong>
      {{ book.description }}
    </p>

    <p>
      <strong>Image:</strong>
      <img width="50" height="50" :src="book.image_url" />
    </p>

    <router-link :to="{ name: 'book_edit_path', params: { book_id: book.id } }"
      >Edit</router-link
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
  }
});
</script>
