import Ember from 'ember';
import RSVP from 'rsvp';

const { Route } = Ember;
const { hash } = RSVP;

export default Route.extend({
  model() {
    let orders = this.store.findAll('order');

    return hash({
      orders
    });
  }
});
