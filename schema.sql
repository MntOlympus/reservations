DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnb;

USE airbnb;

CREATE TABLE property (
  id int NOT NULL AUTO_INCREMENT,
  price decimal(10, 2) NOT NULL,
  propTax decimal
  rating decimal(10, 2) NOT NULL,
  ratingsCount int NOT NULL,
  maxGuests int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE reservation (
  id int NOT NULL AUTO_INCREMENT,
  checkin date ,
  checkout date,
  adults int,
  children int,
  infants int,
  cost decimal(10, 2) NOT NULL,
  property_id int,
  PRIMARY KEY (ID)
);