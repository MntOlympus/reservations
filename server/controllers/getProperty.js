const Model = require('../models/getProperty.js');

const getProperty = (req, res) => {
  Model.getOneProperty(req, (err, data) => {
    if (err) {
      console.log('err in controller getProperty', err);
      res.status(400);
    } else {
      res.status(202);
      res.send(data);
    }
  })
};

module.exports.getProperty = getProperty;