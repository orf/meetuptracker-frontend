import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default DS.Adapter.extend(DS.BuildURLMixin, {
  defaultSerializer: '-rest',

  session: service(),

  host: 'https://api.meetup.com',
  namespace: '/3/'
});
