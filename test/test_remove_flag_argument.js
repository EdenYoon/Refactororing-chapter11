let callerDeliveryDate = require('../src/remove_flag_argument');
let assert = require('assert');


describe('delivery_date_test', async function() {

  it('for empty order', async function() {
    const order = {
      deliveryState: '',
      placedOn: {
        plusDays: function(day) {}
      }
    };

    assert.equal(callerDeliveryDate(order, false), null);
  })

});
