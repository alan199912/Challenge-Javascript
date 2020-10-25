CREATE DATABASE database_budget;

USE database_budget;

-- USERS TABLE --
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
    fullname VARCHAR (100) NOT NULL,
    role ENUM('user','admin'),
    name VARCHAR(100),
    PRIMARY KEY (id)
);

-- transaction TABLE --
CREATE TABLE transaction (
    id INT NOT NULL AUTO_INCREMENT,
    concept VARCHAR(255) NOT NULL,
    budget DECIMAL(15,2),
    type ENUM('income','expense'),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    user_id INT,
    PRIMARY KEY (id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);
