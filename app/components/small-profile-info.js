import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  session: service(),

  name: alias('session.data.authenticated.name'),
  photo_url: alias('session.data.authenticated.photo'),

  actions: {
    logout(closeDropdown) {
      this.get('session').invalidate();
    }
  }
});
