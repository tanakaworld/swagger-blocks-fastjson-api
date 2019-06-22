<template>
  <PPage class="ErrorPage">
    <div class="ErrorPage__Wrapper">
      <h2 class="ErrorPage__Title">404 Error</h2>
      <p class="ErrorPage__Message">お探しのページがみつかりません！</p>
    </div>
  </PPage>
</template>

<script lang="ts">
import Vue from 'vue/dist/vue.esm';

export default Vue.extend({});
</script>

<style scoped>
.ErrorPage {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ErrorPage__Wrapper {
  width: 400px;
  font-size: 130%;
  background: none;
  text-align: center;
  border: none;
}

.ErrorPage__Title {
  text-align: center;
  font-size: 130%;
  font-weight: bold;
  letter-spacing: 0.2em;
  margin-bottom: 40px;
  padding-top: 6px;
}

.ErrorPage__Message {
  text-align: center;
}
</style>
