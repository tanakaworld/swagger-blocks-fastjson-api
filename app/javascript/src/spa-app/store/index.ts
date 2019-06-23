import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';

Vue.use(Vuex);

import APIPlugin from '@spa-app/store/plugins/api';

import * as BookStore from '@spa-app/store/modules/books';

export interface RootState {
  [BookStore.namespace]: BookStore.State;
}
export default new Vuex.Store({
  plugins: [APIPlugin()],
  modules: {
    [BookStore.namespace]: BookStore.module
  }
});
