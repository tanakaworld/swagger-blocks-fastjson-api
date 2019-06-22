<template>
  <div>
    <h1>Books</h1>

    <book-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';
// import PageFetchHook from '../../mixins/PageFetchHook';
import BookList from '../../components/BookList.vue';
//
// import store from '../../store';
// import * as BooksModule from '../../store/modules/books/store';
//
// const fetch = async _params => {
//   await store.dispatch(BooksModule.GetBooks.namespaced(null));
// };

export default Vue.extend({
  // mixins: [PageFetchHook(fetch)],
  components: {
    BookList
  }
});
</script>
