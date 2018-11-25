import Adapter from './base';


export default Adapter.extend({
  modelName: 'group',

  findAll(store, type, sinceToken) {
    return this._fetch('/self/groups')
      .then(resp => this.handleListResponse(resp));
  },

  findRecord(store, type, id, snapshot) {
    const [event_id, group_name] = id.split(':', 2);
    return this._fetch(`/${group_name}/events/${event_id}`)
      .then(resp => this.handleSingleResponse(resp))
  },
});
