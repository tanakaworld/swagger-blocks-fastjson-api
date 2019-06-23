const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@spa-app': path.resolve(__dirname, '../../app/javascript/src/spa-app'),
      '@': path.resolve(__dirname, '../../app/javascript')
    }
  }
};
