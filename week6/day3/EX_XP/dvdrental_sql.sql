--- 1 Get a list of all film languages.

--SELECT * from language;

--2 Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
--  Get all films, even if they don’t have languages.
--  Get all languages, even if there are no films in those languages.
-- SELECT title, description, language.name
-- FROM film 
-- INNER JOIN language
-- ON language.language_id = film.language_id;

-- -3
--Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film(
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(255)
-- );
--INSERT INTO new_film (name) VALUES ('TOP GUN'),('Top gun 2');
--4 Create a new table called customer_review, which will contain film reviews that customers will make.
-- CREATE TABLE customer_review(
--     review_id SERIAL ,
--     film_id INT,
--     language_id INT,
--     title VARCHAR(255),
--     score INT ,
--     review_text TEXT ,
--     last_update  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
--    --  fk_new_film FOREIGN KEY (id) REFERENCES new_film(id) ON DELETE CASCADE, this line didnt really work , why?
--     FOREIGN KEY (film_id) REFERENCES new_film (id),
--     FOREIGN KEY (language_id) REFERENCES language (language_id) ,
--     PRIMARY KEY (review_id)
-- );

-- INSERT INTO customer_review (film_id , language_id , title , score ,review_text) 
-- VALUES (1,1,'TOP GUN',9, 'A good action movie');
-- INSERT INTO customer_review (film_id , language_id , title , score ,review_text) 
-- VALUES (1,1,'Top gun 2',10, 'what a movie have to see again');
-- Database: dvdrental


-- Exercise 2 : DVD Rental

-------------------------------
-- 1 Use UPDATE to change the language of some films. Make sure that you use valid languages.
--SELECT * FROM film
--UPDATE film SET language_id = 3 WHERE title = 'Alter Victory';

-- 2 Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table? 
-- coustomer.address_id is the foreign key
--- we have to join input from a second table

--3 We created a new table called customer_review. Drop this table. Is this an easy step,
--or does it need extra checking?

--DROP TABLE customer_review;
-- sucsses

--4 Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT * FROM rental
-- WHERE return_date < now();
-- ;

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT inventory.inventory_id , film.rental_rate , rental.return_date
-- FROM rental
-- INNER JOIN inventory
-- ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN film
-- ON film.film_id = inventory.film_id
-- WHERE return_date < now() 
-- ORDER BY film.rental_rate DESC 
-- LIMIT 31
-- ;



-- DROP DATABASE dvdrental;

-- CREATE DATABASE dvdrental
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;


---6----
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- 	  SELECT * FROM film
-- 	  INNER JOIN film_actor
-- 	  ON film.film_id = film_actor.actor_id
-- 	  INNER JOIN actor
-- 	  ON actor.actor_id = film_actor.actor_id
-- 	  WHERE film.description LIKE '%sumo%'
-- 	  AND actor.first_name ='Penelope'
-- 	  ;
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
--  SELECT  film.title,rating,film.length 
-- 	   FROM film
-- 	   INNER JOIN film_category
-- 	   ON film_category.film_id = film.film_id
-- 	   INNER JOIN category
-- 	   ON category.category_id = film_category.category_id
-- 	   WHERE film.rating ='R' 
-- 	   AND film.length < 60
-- 	   AND category.name ='Documentary'
-- 	   ;

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
--  SELECT DISTINCT  title , first_name from payment
-- 	  INNER JOIN rental
-- 	  ON rental.customer_id = payment.customer_id
-- 	  INNER JOIN customer
-- 	  ON customer.customer_id = rental.customer_id
-- 	  INNER JOIN inventory
-- 	  ON inventory.inventory_id = rental.inventory_id
-- 	  INNER JOIN film
-- 	  ON film.film_id = inventory.film_id
-- 	  WHERE payment.amount > 4
-- 	  AND rental.return_date > '2005-07-28'
-- 	  AND rental.return_date < '2005-08-01'
-- 	  AND customer.first_name = 'Matthew'
-- 	  ;

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- SELECT DISTINCT film.film_id , title , description , first_name FROM customer
-- 	  INNER JOIN rental
-- 	  ON rental.customer_id = customer.customer_id
-- 	  INNER JOIN inventory
-- 	  ON customer.store_id = inventory.store_id
-- 	  INNER JOIN film
-- 	  ON film.film_id = inventory.film_id
-- 	  WHERE customer.first_name = 'Matthew'
-- 	  AND film.title ILIKE '%boat%'
-- 	  OR  film.description ILIKE '%boat%'
	
-- 	  ;
