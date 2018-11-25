import RSVP from 'rsvp';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import fetch from 'fetch';
import {isEmpty} from '@ember/utils';

export default BaseAuthenticator.extend({
  restore(data) {
    return this._validate(data) ? Promise.resolve(data) : Promise.reject();
  },

  authenticate(provider, options) {
    return new RSVP.Promise((resolve, reject) => {
      fetch('/api/whoami')
        .then(resp => resp.json())
        .then(data => resolve(data))
        .catch(reason => reject(reason))
    })
  },

  _validate(data) {
    return !isEmpty(data.token) && !isEmpty(data.name) && !isEmpty(data.photo)
  }
});
