const { environment } = require('@rails/webpacker');
const { VueLoaderPlugin } = require('vue-loader');
const vue = require('./loaders/vue');
const typescript = require('./loaders/typescript');
const alias = require('./alias');

environment.loaders.append('typescript', typescript);
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin());
environment.loaders.prepend('vue', vue);
environment.toWebpackConfig().merge(alias);

module.exports = environment;
