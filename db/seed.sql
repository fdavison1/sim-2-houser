--CREATE TABLE

CREATE TABLE houses (
id SERIAL PRIMARY KEY,
name VARCHAR(30),
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip INT,
img TEXT, 
mortgage DECIMAL, 
rent decimal
);

--DUMMY DATA

INSERT INTO houses (name, address)
VALUES
('house1', '123 dummy st'),
('house2', '234 dummy st'),
('house3', '345 dummy st');

--ALTER TABLE 

ALTER TABLE houses
ADD COLUMN img TEXT,
ADD COLUMN mortgage INT,
ADD COLUMN rent INT;

SELECT * FROM houses;