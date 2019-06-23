<template>
  <li class="BookListItem">
    {{ book.name }}
  </li>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>
.BookListItem {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #82dad1;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
