import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  order: belongsTo('order'),
  product: belongsTo('product')
});
