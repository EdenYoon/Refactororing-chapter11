let callerScore = require('../src/replace_function_with_command');
let assert = require('assert');


describe('score_test', async function() {

  it('for dummy arguments', async function() {
    let candidate = {
      originState: null
    };
    let medicalExam = {
      isSmoker: false
    };
    let scoringGuide = {
      stateWithLowCertification: function (state) { return state; }
    };

    assert.equal(callerScore(candidate, medicalExam, scoringGuide), 0);
  });

  it('for positive arguments', async function() {
    let candidate = {
      originState: 'true'
    };
    let medicalExam = {
      isSmoker: true
    };
    let scoringGuide = {
      stateWithLowCertification: function (state) { return state; }
    };

    assert.equal(callerScore(candidate, medicalExam, scoringGuide), -10);
  });

});
