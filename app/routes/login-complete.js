import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      this.get('session').authenticate('authenticator:backend').then(
        () => this.replaceWith('index'),
        () => this.controller.set('loginError', true)
      )
    }
  }
});
