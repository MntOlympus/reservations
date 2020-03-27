const DB = require('./index.js');


const getPropertySeedData = () => {

  for (let i = 0; i < 100; i++) {
    let price = Math.floor(Math.random() * 375 + 25);
    let rating = Number((Math.random() * 1.5 + 3.5).toFixed(2));
    let count = Math.floor(Math.random() * 480 + 20);
    let max = Math.floor(Math.random() * 6 + 2);
    let tax = .103;
    let fee = .09;

    let qString = `INSERT INTO properties (price, rating, ratings_count, max_guests, tax, service_fee) VALUES (${price}, ${rating}, ${count}, ${max}, ${tax}, ${fee})`;


    DB.query(qString, (err, data) => {
      if (err) {
        console.log('error seeding database', err);
      } else {
        console.log('Success! Insert worked')
      }
    });
  }
}

module.exports = { getPropertySeedData };