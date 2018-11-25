import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log('finding group')
    return this.store.findAll('group');
  }
});
