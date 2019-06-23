<template>
  <form @submit="onSubmit">
    <div class="field">
      <label for="book_title">Title</label>
      <input
        required="required"
        type="text"
        name="book[title]"
        id="book_title"
        v-model="formData.title"
      />
    </div>

    <div class="field">
      <label for="book_description">Description</label>
      <textarea
        required="required"
        name="book[description]"
        id="book_description"
        v-model="formData.description"
      />
    </div>

    <div class="field">
      <label for="book_image">Image</label>
      <input
        type="file"
        name="book[image]"
        id="book_image"
        @change="onChangeImage"
      />
    </div>

    <div class="actions">
      <input type="submit" name="commit" value="Save" />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';
import { Book } from '@gen';

export default Vue.extend({
  props: {
    book: {
      type: Object as () => Book,
      default: null
    }
  },
  data() {
    const { title, description } = this.book
      ? this.book
      : { title: null, description: null };
    return {
      formData: {
        title,
        description,
        image: void 0
      }
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit('submit', this.formData);
    },
    onChangeImage(e: any) {
      e.preventDefault();
      const file = e.target.files[0];
      this.formData.image = file ? file : void 0;
    }
  }
});
</script>
