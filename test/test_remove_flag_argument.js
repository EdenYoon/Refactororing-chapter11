let callerDeliveryDate = require('../src/remove_flag_argument');
let assert = require('assert');


describe('delivery_date_test', async function() {

  it('for empty order', async function() {
    assert.equal(callerDeliveryDate({
      deliveryState: '',
      placedOn: {
        plusDays: function(day) {}
      }
    }, false), null);
  })

});
