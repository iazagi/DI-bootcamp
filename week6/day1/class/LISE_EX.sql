-- Database: Exercises_In_Class
-- CREATE TABLE city_info (
--    event_datetime timestamp NOT NULL,
--    city VARCHAR(50) NOT NULL,
--    temperature decimal NOT NULL,
--    light decimal NOT NULL,
--    airquality_raw decimal NOT NULL,
--    sound decimal NOT NULL,
--    humidity decimal NOT NULL,
--    dust decimal NOT NULL
-- )
--


--<!-- INSTRUCTIONS -- Questions -->
-- 1. Select everything from the table. (every row and columns) - How many records does the table have?
--SELECT * from city_info;
--4711
-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
--SELECT city,event_datetime,temperature  from city_info WHERE event_datetime = '2015-03-01 11:00:00' and city ='Boston'
-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ? 
--SELECT city, event_datetime, temperature FROM city_info WHERE temperature >28 AND temperature < 30
-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
--SELECT  city, event_datetime, sound  FROM city_info ORDER BY sound DESC LIMIT 1;
-- geneva

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
--SELECT  city, event_datetime, sound  FROM city_info ORDER BY sound ASC LIMIT 1;

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
SELECT  city, event_datetime,dust FROM city_info WHERE city = 'San Francisco' and event_datetime = '2015-03-26 20:00' AND event_datetime < '2015-03-27 00:00';
-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
-- SELECT event_datetime, humidity FROM city_info WHERE city ILIKE 'Geneva' AND (humidity < 40 OR humidity > 60);

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
-- SELECT to_char(event_datetime, 'Day'), city, light FROM city_info ORDER BY light DESC LIMIT 1;

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.
-- SELECT DISTINCT ON (city) city, * FROM city_info WHERE city ILIKE 's%';


-- 10. Add to the table, todays information in Israel - of this very hour. 
--(timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- - Use the return statement to see what you just inserted: 
-- INSERT INTO city_info (event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust) 
-- 	VALUES(now(),'los alamos',-10,-11,-6,-5,-4,200) RETURNING *;


--https://www.postgresqltutorial.com/postgresql-insert/


--copy city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
--FROM 'C:\Users\Public\city_info.csv' DELIMITER ',' CSV HEADER;
--select * from city_info



-- DROP DATABASE "Exercises_In_Class";

-- CREATE DATABASE "Exercises_In_Class"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;