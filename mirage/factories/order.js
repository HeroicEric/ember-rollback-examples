import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  description() {
    return faker.lorem.paragraph(1);
  }
});
