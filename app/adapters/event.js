import Adapter from './base';
import fetch from 'fetch';


export default Adapter.extend({
  findAll(store, type, sinceToken) {
    const token = this.get('session.data.authenticated.token');
    return fetch(`${this.host}/self/events?access_token=${token}`)
      .then(resp => resp.json())
      .then(this.handleResponse)
  },

  handleResponse(data) {
    return {
      events: data
    }
  }
});
