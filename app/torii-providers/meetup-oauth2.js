import Oauth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

/**
 * This class implements authentication against Github
 * using the OAuth2 authorization flow in a popup window.
 * @class
 */
var Meetup = Oauth2.extend({
  name: 'meetup-oauth2',
  baseUrl: 'https://secure.meetup.com/oauth2/authorize',

  requiredUrlParams: ['state', 'setMobile'],
  responseParams: ['token'],
  setMobile: 'on',
  responseType: 'token',

  state: 'STATE',

  redirectUri: configurable('redirectUri', function () {
    return this._super();
  })
});

export default Meetup;
