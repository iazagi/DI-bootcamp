
-- CREATE TABLE customer (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(255), 
-- 	last_name VARCHAR(255) NOT NULL
-- );
-- CREATE TABLE customer_profile (
-- 	id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOLEAN DEFAULT false, 
-- 	customer_id SMALLINT UNIQUE REFERENCES customer (id) 
-- )
--INSERT INTO customer (first_name , last_name) VALUES ('israel' , 'azagi'), ('haim' , 'moshe'), ('will' , 'Smith');
--INSERT INTO customer_profile (isLoggedIn ) Values ('true') , ('false') , ('true');

-- SELECT * from customer_profile
-- WHERE isLoggedIn = 'true'
-- ;
--SELECT * FROM customers;
--SELECT COUNT(*) FROM customer_profile WHERE isLoggedIn = 'false';


-- CREATE TABLE student(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL UNIQUE,
--     age INT,
--     CONSTRAINT valid_number CHECK ( age < 15 )
-- )
-- ;
--4
--INSERT INTO student (name , age) VALUES ('John', 12) , ('Lera',11) , ('Patrick' , 10) , ('Bob',14);
-- CREATE TABLE book(
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR (255) NOT NULL
-- )
-- ;

-- INSERT INTO book (title , author)
-- VALUES  ('Alice In Wonderland' , 'Lewis Carroll') ,
-- 		('Harry Potter' , 'J.K Rowling') ,
-- 		('To kill a mockingbird' , 'Harper Lee');
		
-- CREATE TABLE library(
--     book_id INT references book(id) ON DELETE CASCADE ON UPDATE CASCADE,
--     student_id INT references student(id) ON DELETE CASCADE ON UPDATE CASCADE,
--     borrowed_date date NOT NULL DEFAULT CURRENT_DATE,
-- 	 PRIMARY KEY (book_id, student_id)
-- )

INSERT INTO library (book_id,student_id,borrowed_date)
VALUES
((SELECT id FROM book WHERE title='Alice In Wonderland'), (SELECT id FROM student WHERE name='John'), '2022-05-15'),
((SELECT id FROM book WHERE title='To kill a mockingbird'), (SELECT id FROM student WHERE name='Bob'), '2021-03-03'),
((SELECT id FROM book WHERE title='Alice In Wonderland'), (SELECT id FROM student WHERE name='Lera'), '2021-05-23'),
((SELECT id FROM book WHERE title='Harry Potter'), (SELECT id FROM student WHERE name='Bob'), '2021-08-12');
​
-- SELECT * FROM library;
​
-- Select all the columns from the junction table
SELECT * FROM library;
​
-- Select the name of the student and title of the borrowed books
SELECT name, title
FROM library
INNER JOIN book ON book.id=library.book_id
INNER JOIN student ON student.id=library.student_id;
​
-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT ROUND(AVG(age),1)
FROM library
INNER JOIN book ON book.id=library.book_id
INNER JOIN student ON student.id=library.student_id
WHERE title ILIKE '%alice in wonderland%';
​
-- Delete a student from the Student table, what happened in the junction table ?
-- SELECT * FROM library;
DELETE FROM student WHERE name='Bob';
SELECT * FROM library; -- also deleted in the junction table because of ON DELETE CASCADE