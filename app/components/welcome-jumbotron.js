import Component from '@ember/component';

export default Component.extend({
  actions: {
    login() {
      window.location.href = '/api/auth/login/meetup/'
    }
  }
});
