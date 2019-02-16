let callerAlertForMiscreant = require('../src/separate_query_from_modifier');
let assert = require('assert');


describe('alert_for_miscreant', async function() {

  it('for empty people', async function() {
    assert.equal(callerAlertForMiscreant([]), '');
  })

  it('for single person', async function() {
    assert.equal(callerAlertForMiscreant(['Don']), 'Don');
    assert.equal(callerAlertForMiscreant(['John']), 'John');
    assert.equal(callerAlertForMiscreant(['Gyehong']), '');
  })

  it('for people', async function() {
    assert.equal(callerAlertForMiscreant(['Don', 'John']), 'Don');
    assert.equal(callerAlertForMiscreant(['John', 'Don']), 'John');
    assert.equal(callerAlertForMiscreant(['Gyehong', 'John', 'Don']), 'John');
  })

});
