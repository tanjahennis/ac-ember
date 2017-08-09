
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('instruction-steps', 'helper:instruction-steps', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{instruction-steps inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

