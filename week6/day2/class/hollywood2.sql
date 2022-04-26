-- Database: Hollywood

-- DROP DATABASE "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;


-- -- Update the first name of Matt Damon to "Maty"
-- UPDATE actros SET first_name ='Maty' WHERE last_name = 'Damon'
-- RETURNING
-- -- Update the number of oscars of George Clooney to 4, and return the updated record
-- UPDATE actros SET number_oscrars = 4 WHERE first_name= 'George' AND last_name = 'Clooney'
-- RETURNING *;
-- -- Delete one actor and return it
-- DELETE FROM actors
-- WHERE actor_id = 3
-- RETURNING *;
-- Change the type of number_oscars column from smallint to bigint
-- ALTER TABLE actors
-- ALTER COLUMN number_oscrars TYPE BIGINT
