import Adapter from './base';
import fetch from 'fetch';


export default Adapter.extend({

  _fetch(url) {
    const token = this.get('session.data.authenticated.token');
    return fetch(`${this.host}${url}?access_token=${token}`)
      .then(resp => resp.json())
  },

  findAll(store, type, sinceToken) {
    return this._fetch('/self/events')
      .then(resp => this.handleListResponse(resp));
  },

  findRecord(store, type, id, snapshot) {
    const [event_id, group_name] = id.split(':', 2);
    return this._fetch(`/${group_name}/events/${event_id}`)
      .then(resp => this.handleSingleResponse(resp))
  },

  createCompositeId(event_data) {
    // We need a composite event-group url and event ID PK
    // to do anything useful with this model
    const group_name = event_data.group.urlname;
    event_data.composite_id = `${event_data.id}:${group_name}`;
    return event_data;
  },

  handleSingleResponse(data) {
    return {
      event: this.createCompositeId(data)
    }
  },

  handleListResponse(data) {
    return {
      events: data.map(this.createCompositeId)
    }
  }
});
