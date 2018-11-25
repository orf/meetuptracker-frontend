import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  waitlist_count: DS.attr('number'),
  yes_rsvp_count: DS.attr('number'),
  local_date: DS.attr('string'),
  local_time: DS.attr('string'),
});
