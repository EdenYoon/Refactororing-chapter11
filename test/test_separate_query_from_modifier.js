let alertForMiscreant = require('../src/separate_query_from_modifier');
let assert = require('assert');


describe('alert_for_miscreant', async function() {

  it('for empty people', async function() {
    assert.equal(alertForMiscreant([]), '');
  })

});
