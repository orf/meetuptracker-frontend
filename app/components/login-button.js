import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),

  actions: {
    login() {
      this.get('session').authenticate('authenticator:torii', 'meetup-oauth2');
    }
  }
});
