import Vue from 'vue/dist/vue.esm';

let vms = [];
const options = {};

const requireContext = require.context('../options', false, /\.ts$/);
requireContext.keys().forEach(key => {
  const name = key
    .split('/')
    .pop()
    .split('.')
    .shift();
  options[name] = requireContext(key).default;
});

document.addEventListener('turbolinks:load', () => {
  const templates = document.querySelectorAll('[data-vue]');
  templates.forEach((el: HTMLElement) => {
    const vm = new Vue(Object.assign(options[el.dataset.vue], { el }));
    vms.push(vm);
  });
});

document.addEventListener('turbolinks:visit', () => {
  for (let vm of vms) {
    vm.$destroy();
  }
  vms = [];
});
