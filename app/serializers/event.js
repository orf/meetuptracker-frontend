import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'composite_id'
});
