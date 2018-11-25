import Adapter from './base';


export default Adapter.extend({
  modelName: 'group',

  findAll(store, type, sinceToken) {
    return this._fetch('/self/groups')
      .then(resp => this.handleListResponse(resp));
  },

  findRecord(store, type, id, snapshot) {
    return this._fetch(`/${id}`)
      .then(resp => this.handleSingleResponse(resp))
  },
});
