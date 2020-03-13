var faker = require('faker');

const getPropertyData = () => {
  let amnt = 100;
  let propertyData = [];

  for (let i = 0; i < amnt; i++) {
    let rating = Number((Math.random() * 1.5 + 3.5).toFixed(2));
    let count = Math.floor(Math.random() * 480 + 20);
    let price = Math.floor(Math.random() * 375 + 25);
    let max = Math.floor(Math.random() * 6 + 2);
    let tax = .1;
    let fee = .09;

    propertyData.push( {
      price: price,
      rating: rating,
      ratingsCount: count,
      maxGuests: max,
      tax: tax,
      service_fee: fee
    });
  }

  return propertyData;
}

console.log(getPropertyData());