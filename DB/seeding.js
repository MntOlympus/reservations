var faker = require('faker');

const getProperties = () => {
  let amnt = 100;
  let propertyData = [];

  for (let i = 0; i < amnt; i++) {
    let rating = (Math.random() * 1.5 + 3.5).toFixed(2);
    let count = Math.floor(Math.random() * 480 + 20);
    let price = Math.floor(Math.random() * 375 + 25);
    let max = Math.floor(Math.random() * 6 + 2);

    propertyData.push( {
      price: price,
      rating: rating,
      ratingsCount: count,
      maxGuests: max
    })
  }
  return propertyData;
}

console.log(getProperties());