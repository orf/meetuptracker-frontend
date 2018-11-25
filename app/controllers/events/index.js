import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    viewEvent(event) {
      this.transitionToRoute('events.event', event)
    }
  }
});
