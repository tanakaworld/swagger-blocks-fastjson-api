<template>
  <ul class="BookList">
    <BookListItem v-for="book in books" :key="book.id" :book="book" />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';

import BookListItem from './BookListItem.vue';

export default Vue.extend({
  components: {
    BookListItem
  },
  data() {
    return {
      books: []
    };
  },
  mounted() {
    // TODO use store
    this.books = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' },
      { id: 4, name: 'D' },
      { id: 5, name: 'E' }
    ];
  }
});
</script>

<style scoped>
.BookList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.BookListItem + .BookListItem {
  margin-left: 16px;
}
</style>
