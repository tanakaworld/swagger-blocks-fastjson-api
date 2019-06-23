export default fetch => {
  if (!!fetch && typeof fetch !== 'function') {
    throw new Error('fetch callback is necessary');
  }

  return {
    beforeRouteEnter: async function(route, redirect, next) {
      await fetch(route.params);
      next();
    },
    beforeRouteUpdate: async function(to, from, next) {
      await fetch(to.params);
      next();
    }
  };
};
