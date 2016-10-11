import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  order: belongsTo('order'),
  product: belongsTo('product')
});
