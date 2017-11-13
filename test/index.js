const chai = require('chai');
const models = require('../models.js');

describe('foodwallet', () => {
  const errorMsg = {
    status: 404,
    err: {
      msg: 'Not found'
    }
  };
  const validData = {
    id: 1,
    shift: 'morning',
    name: 'Mr.A'
  };
  it('When no ID is passed', () => {
    return models.getDetails()
      .then((data) => {
        chai.expect(data).to.deep.equal(errorMsg);
      });
  });
  it('When valid is passed', () => {
    return models.getDetails('1')
      .then((data) => {
        chai.expect(data).to.deep.equal(validData);
      });
  });
});