import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      if (this.get('session.isAuthenticated')) {
        this.replaceWith('events')
      }
    }
  }
});
