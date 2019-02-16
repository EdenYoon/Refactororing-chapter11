let alertForMiscreant = require('../src/separate_query_from_modifier');
let assert = require('assert');


describe('alert_for_miscreant', async function() {

  it('for empty people', async function() {
    assert.equal(alertForMiscreant([]), '');
  })

  it('for single person', async function() {
    assert.equal(alertForMiscreant(['Don']), 'Don');
    assert.equal(alertForMiscreant(['John']), 'John');
    assert.equal(alertForMiscreant(['Gyehong']), '');
  })

  it('for people', async function() {
    assert.equal(alertForMiscreant(['Don', 'John']), 'Don');
    assert.equal(alertForMiscreant(['John', 'Don']), 'John');
    assert.equal(alertForMiscreant(['Gyehong', 'John', 'Don']), 'John');
  })

});
