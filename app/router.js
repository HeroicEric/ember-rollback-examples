import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('order', { path: '/orders/:orderId' });
  this.route('new-order', { path: '/orders/new' });
});

export default Router;
