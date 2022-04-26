-- Database: Public

-- DROP DATABASE "Public";

CREATE DATABASE "Public"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
--1
SELECT * FROM items ORDER BY price DESC;
--2
SELECT * FROM items WHERE price >= 80;
--3
SELECT * FROM customers LIMIT 3 ORDER BY first_name ASC RETURNING first_name , last_name;
--4
SELECT DISTINCT last_name FROM customers ORDER BY last_name DESC;

--2-----------------------------

CREATE TABLE purchases(
    id SERIAL  ,
    customer_id INT, 
    item_id INT,
    quantity_purchased INT,
	PRIMARY KEY(id)
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id),

)

SELECT customers.first_name , items.item_name 
FROM purchases
INNER JOIN items ON items.item_id = purchases.item_id 
INNER JOIN customers ON customers.customer_id = purchases.customer_id
;

INSERT INTO purchases (customer_id,item_id, quantity_purchased) VALUES (3,3,1);

INSERT INTO purchases (customer_id, item_id,quantity_purchased) VALUES (5,2,10);

INSERT INTO purchases (customer_id , item_id , quantity_purchased ) VALUES (1,1,2);


--PART II

SELECT * FROM purchases;
--2

SELECT purchases.quantity_purchased 
FROM purchases
INNER JOIN customers 
ON purchases.customer_id = customers.customer_id;

--3

SELECT * 
FROM purchases 
INNER JOIN customers 
ON purchases.customer_id = customers.customer_id
WHERE customers.customer_id =1
;

--4
SELECT * 
FROM purchases
INNER JOIN items
ON purchases.item_id = items.item_id 
WHERE items.item_name = 'small_Desk' AND items.item_name = 'Large_desk'
;


--PART II 2

SELECT customers.first_name , items.item_name 
FROM purchases
INNER JOIN items ON items.item_id = purchases.item_id 
INNER JOIN customers ON customers.customer_id = purchases.customer_id
;
