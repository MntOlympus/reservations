const DB = require('./index.js');
const seed = require('./seed.js');

const addSchema = () => {
    let qString = `DROP DATABASE IF EXISTS reservations;

    CREATE DATABASE reservations;

    USE reservations; 

    CREATE TABLE properties (
        id int NOT NULL AUTO_INCREMENT,
        price decimal(10, 2) NOT NULL,
        rating decimal(10, 2) NOT NULL,
        ratings_count int NOT NULL,
        max_guests int NOT NULL,
        tax decimal(10, 2) NOT NUll,
        service_fee decimal(10, 2),
        PRIMARY KEY (ID)
      )`;       


    DB.query(qString, (err, data) => {
        if (err) {
            console.log('error creating schema', err);
        } else {
            console.log('Hooray, DB schema inserted properly')
            seed.getPropertySeedData();
            DB.end();
        }
    });
}

addSchema();