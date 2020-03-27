const db = require('../../db/index.js');

const getOneProperty = (value, callback) => {
  let randomId = Math.floor(Math.random() * 100)
  const qString = `SELECT * FROM properties WHERE id = '${randomId}'`;

  db.query(qString, callback)
};

module.exports = { getOneProperty };