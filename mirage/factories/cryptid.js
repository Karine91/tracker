import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Person ${i}`;
  },
  cryptidType: 'test',
  profileImg() {
    return faker.internet.avatar();
  }
});
