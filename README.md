CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
	first_name varchar(50) NOT NULL,
    last_name varchar(50),
    email varchar(50),
    password varchar(50),
    active varchar(50),
    insertData varchar(50),
    updateData varchar(50),
    PRIMARY KEY (id)
);
