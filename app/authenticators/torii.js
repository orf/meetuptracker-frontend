import { inject as service } from '@ember/service';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import fetch from 'fetch';

export default ToriiAuthenticator.extend({
  torii: service(),
  currentUser: service(),

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
