<template>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Image</th>
        <th colspan="3"></th>
      </tr>
    </thead>

    <tbody>
      <BookListItem
        v-for="book in books"
        :key="book.id"
        :book="book"
        @delete="onDelete"
      />
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';

import BookListItem from '@spa-app/components/books/BookListItem.vue';
import { Book } from '@gen';

export default Vue.extend({
  components: {
    BookListItem
  },
  props: {
    books: {
      type: Array as () => Book[],
      required: true
    }
  },
  methods: {
    onDelete(id: number) {
      this.$emit('delete', id);
    }
  }
});
</script>
