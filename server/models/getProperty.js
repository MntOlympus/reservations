const db = require('../../db/index.js');

const getOneProperty = (value, callback) => {
  let randomId = Math.floor(Math.random() * 100)
  const qString = `SELECT * FROM properties WHERE id = '${randomId}'`;

  db.query(qString, (err, property) => {
    if (err) {
      console.log('err in getPropery Model', err)
    } else {
      callback(null, property)
    }
  })
};

module.exports = { getOneProperty };