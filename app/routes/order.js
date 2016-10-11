import Ember from 'ember';
import RSVP from 'rsvp';

const { Route } = Ember;
const { hash } = RSVP;

export default Route.extend({
  model({ orderId }) {
    let order = this.store.findRecord('order', orderId, {
      include: 'line-items'
    });
    let lineItems = order.then((o) => o.get('lineItems'));

    return hash({
      order,
      lineItems
    });
  }
});
