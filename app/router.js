import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login-complete');
  this.route('events', function() {
    this.route('loading');
    this.route('event', { path: '/:event_id' });
  });
});

export default Router;
