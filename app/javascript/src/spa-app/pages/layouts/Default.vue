<template>
  <div class="Layout">
    <c-header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';
import CHeader from '@spa-app/components/CHeader.vue';

export default Vue.extend({
  components: {
    CHeader
  }
});
</script>
