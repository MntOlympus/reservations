DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnb;

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
);

CREATE TABLE reservation (
  id int NOT NULL AUTO_INCREMENT,
  checkin date ,
  checkout date,
  adults int,
  children int,
  infants int,
  cost decimal(10, 2) NOT NULL,
  tax decimal(10, 2) NOT NULL,
  service_charge decimal(10, 2) NOT NULL,
  property_id int,
  PRIMARY KEY (ID)
);
