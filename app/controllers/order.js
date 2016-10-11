import Ember from 'ember';
import RSVP from 'rsvp';

const {
  Controller,
  computed
} = Ember;

const {
  filterBy,
  notEmpty,
  or,
  readOnly
} = computed;

const { all } = RSVP;

export default Controller.extend({
  lineItemsWithDirtyAttributes: filterBy('model.lineItems', 'hasDirtyAttributes', true).readOnly(),
  hasLineItemsWithChanges: notEmpty('lineItemsWithDirtyAttributes').readOnly(),

  hasChanges: or('hasLineItemsWithChanges'),

  actions: {
    removeProduct(lineItem) {
      lineItem.deleteRecord();
    },

    reset() {
      let { lineItems } = this.get('model');

      lineItems.forEach((li) => li.rollbackAttributes());
    },

    save() {
      let { order, lineItems } = this.get('model');

      order.save().then(() => {
        all(lineItems.map((li) => li.save()))
          .then(() => alert('saved all the things!'));
      });
    }
  }
});
