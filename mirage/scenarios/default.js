import { faker } from 'ember-cli-mirage';

export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  let orders = server.createList('order', 10);
  let products = server.createList('product', 10);

  orders.forEach((order) => {
    let count = faker.helpers.randomize([5, 6, 7, 8, 9, 10]);
    let i = 0;

    while (i < count) {
      let product = faker.helpers.randomize(products);

      server.create('lineItem', { order, product });

      i ++;
    }
  });
}
