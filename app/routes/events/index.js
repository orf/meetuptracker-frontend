import Route from '@ember/routing/route';

export default Route.extend({
   model() {
    return this.store.findAll('event');
  },

  actions: {
     viewEvent(event) {
       this.transitionTo('event')
     }
  }
});
