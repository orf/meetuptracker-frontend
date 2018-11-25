import DS from 'ember-data';
import {isNone} from '@ember/utils';
import {inject as service} from '@ember/service';
import fetch from "fetch";

export default DS.Adapter.extend(DS.BuildURLMixin, {
  defaultSerializer: '-rest',

  session: service(),

  host: 'https://api.meetup.com',
  namespace: '/3/',

  modelName: null,

  _fetch(url) {
    const token = this.get('session.data.authenticated.token');
    return fetch(`${this.host}${url}?access_token=${token}`)
      .then(resp => resp.json())
  },

  handleSingleResponse(data, callback = undefined) {
    return {
      [this.get('modelName')]: callback ? callback(data) : data
    }
  },

  handleListResponse(data, callback = undefined) {
    return {
      [`${this.get('modelName')}s`]: callback ? data.map(callback) : data
    }
  }
});
