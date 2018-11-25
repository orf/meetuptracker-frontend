import {inject as service} from '@ember/service';
import RSVP from 'rsvp';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import fetch from 'fetch';

export default BaseAuthenticator.extend({
  currentUser: service(),

  authenticate(provider, options) {
    return new RSVP.Promise((resolve, reject) => {
      resolve({lol: 1})
    })
  }

  // authenticate(provider, options) {
  //   return this._super(provider, options).then(
  //     data => {
  //       //fetch(`https://api.meetup.com/2/member/self/?access_token=${data.authorizationCode}`);
  //       console.log(data);
  //       return data;
  //     }
  //   );
  // }
});
