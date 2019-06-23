<template>
  <tr>
    <td>{{ book.title }}</td>
    <td>{{ book.description }}</td>
    <td>
      <img width="50" height="50" :src="book.image_url" />
    </td>
    <td>
      <router-link
        :to="{ name: 'book_show_path', params: { book_id: book.id } }"
        >Show</router-link
      >
    </td>
    <td>
      <router-link
        :to="{ name: 'book_edit_path', params: { book_id: book.id } }"
        >Edit</router-link
      >
    </td>
    <td>
      <a rel="nofollow" @click.prevent="onDelete" href="javascript: void 0;"
        >Destroy</a
      >
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';
import { Book } from '@gen';

export default Vue.extend({
  props: {
    book: {
      type: Object as () => Book,
      required: true
    }
  },
  methods: {
    onDelete() {
      if (confirm('Are you sure?')) {
        this.$emit('delete', this.book.id);
      }
    }
  }
});
</script>
