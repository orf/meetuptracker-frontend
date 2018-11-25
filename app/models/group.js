import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  localized_location: DS.attr(),
  members: DS.attr('number'),
  who: DS.attr(),
  group_photo: DS.attr(),
  key_photo: DS.attr(),
  urlname: DS.attr(),
});
