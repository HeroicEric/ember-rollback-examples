import Ember from 'ember';
import RSVP from 'rsvp';

const {
  Route,
  A: EmberArray
} = Ember;
const { hash } = RSVP;

export default Route.extend({
  model() {
    let order = this.store.createRecord('order');
    let products = this.store.findAll('product');
    let lineItems = EmberArray();

    return hash({
      order,
      lineItems,
      products
    });
  }
});
