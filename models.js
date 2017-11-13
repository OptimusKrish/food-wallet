const _ = require('lodash');
const data = require('./db/data.json');
const models = {};

models.getDetails = (id) => {
  return new Promise((resolve) => {
      if (!id) {
        return resolve(models.errorMsg());
      } else {
        const value = _.filter(data, d => String(d.id) === id);
        const result = (value && value.length) ? value[0] : models.errorMsg();
        resolve(result);
      } 
  });
};

models.errorMsg = () => {
  return new Promise((resolve) => {
    const err = {
      status: 404,
      err: {
        msg: 'Not found'
      }
    };
    resolve(err);
  });
};

module.exports = models;
