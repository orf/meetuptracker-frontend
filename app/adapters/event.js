import Adapter from './base';


export default Adapter.extend({
  modelName: 'event',

  findAll(store, type, sinceToken) {
    return this._fetch('/self/events')
      .then(resp => this.handleListResponse(resp, this.createCompositeId));
  },

  findRecord(store, type, id, snapshot) {
    const [event_id, group_name] = id.split(':', 2);
    return this._fetch(`/${group_name}/events/${event_id}`)
      .then(resp => this.handleSingleResponse(resp, this.createCompositeId))
  },

  createCompositeId(event_data) {
    // We need a composite event-group url and event ID PK
    // to do anything useful with this model
    const group_name = event_data.group.urlname;
    event_data.composite_id = `${event_data.id}:${group_name}`;
    return event_data;
  },
});
