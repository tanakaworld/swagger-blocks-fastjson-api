<template>
  <div>
    <h1>New Book (SPA)</h1>

    <book-form @submit="onSubmit" />

    <router-link :to="{ name: 'books_path' }">Back</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';
import BookForm, { FormData } from '@spa-app/components/books/Form.vue';

import * as BooksModule from '@spa-app/store/modules/books';

export default Vue.extend({
  components: {
    BookForm
  },
  methods: {
    async onSubmit(body: FormData) {
      await this.$store.dispatch(
        BooksModule.CreateBook.namespaced({
          body
        })
      );
      this.$router.push({ name: 'books_path' });
    }
  }
});
</script>
