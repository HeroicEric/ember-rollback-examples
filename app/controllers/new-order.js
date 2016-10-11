import Ember from 'ember';
import RSVP from 'rsvp';

const { Controller } = Ember;
const { all } = RSVP;

export default Controller.extend({
  actions: {
    save(event) {
      event.preventDefault();

      let { order, lineItems } = this.get('model');

      order.save().then(() => {
        all(lineItems.map((lineItem) => lineItem.save())).then(() => {
          this.transitionToRoute('index');
        });
      });
    },

    addProduct(product) {
      let { order, lineItems } = this.get('model');

      let lineItem = this.store.createRecord('line-item', {
        order,
        product
      });

      lineItems.pushObject(lineItem);
    }
  }
});
