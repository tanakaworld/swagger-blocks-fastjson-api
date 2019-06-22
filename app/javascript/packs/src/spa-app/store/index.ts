import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';

Vue.use(Vuex);

import APIPlugin from './plugins/api';

import * as BookStore from './modules/books/store';

export interface RootState {
  [BookStore.namespace]: BookStore.State;
}
export default new Vuex.Store({
  plugins: [APIPlugin()],
  modules: {
    [BookStore.namespace]: BookStore.module
  }
});
