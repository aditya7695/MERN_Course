-- CREATE TABLE students (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     age INT CHECK (age >= 16),
--     email VARCHAR(100) UNIQUE,
--     city VARCHAR(50)
--     );

-- CREATE TABLE courses (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     duration_weeks INT NOT NULL,
--     fee DECIMAL(8,2) NOT NULL
-- );

-- CREATE TABLE enrollments (
--     id SERIAL PRIMARY KEY,
--     student_id INT NOT NULL,
--     course_id INT NOT NULL,
--     enrollment_date DATE,
--     FOREIGN KEY (student_id) REFERENCES students(id),
--     FOREIGN KEY (course_id) REFERENCES courses(id)
-- );


-- INSERT INTO students (name, age, email, city) VALUES
-- ('Aarav', 19, 'aarav@example.com', 'Pune'),
-- ('Meera', 20, 'meera@example.com', 'Mumbai'),
-- ('Riya', 18, 'riya@example.com', 'Nashik'),
-- ('Kabir', 21, 'kabir@example.com', 'Pune'),
--  ('Sara', 22, 'sara@example.com', 'Nagpur');

--  INSERT INTO courses (title, duration_weeks, fee) VALUES
--  ('SQL Basics', 6, 2500.00),
--  ('Web Development', 10, 5000.00),
--  ('Python Fundamentals', 8, 4000.00);

--  INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES
--  (1, 1, '2026-05-01'), (1, 2, '2026-05-03'), (2, 1, '2026-05-04'), (3, 3, '2026-05-05');

-- select * from students;
-- select * from courses;
-- select * from enrollments;

-- select * from students where city ilike 'pune'; 
-- select * from students where age >=20;
-- select * from courses where fee < 5000 ;
-- select * from students where city ilike 'mumbai' or city ilike 'pune';

-- select * from students order by age asc;

-- 
-- this given me the record of second youngest person 
-- offset will skip records .
-- select * from students order by age asc limit 1 offset 1;
-- select * from courses order by fee desc limit 2;

-- update students set city='delhi' where name='kabir';
-- update courses set fee=3000.00 where title ilike 'SQL Basics';
-- update students set age=21 where name ilike 'Meera';

-- select * from students;
-- select * from courses;

-- delete from students where id=5;
-- DELETE FROM enrollments 
-- WHERE student_id IN (SELECT id FROM students WHERE city ILIKE 'nashik');
-- DELETE FROM students 
-- WHERE city ILIKE 'nashik';
-- select * from students;
-- delete from courses where fee > 6000;


-- select * from users;
-- select * from posts;


-- this is how we join different tables 
-- "as is alias where we can give a temp name to that column"

-- inner join gives only common records between users and posts
-- i.e if user_id is null in posts table it will not be included
-- select posts.title , users.name as author 
-- from posts inner join users on posts.user_id = users.id;

-- left join gives all records in posts and common in users
-- even if that data is not available in users table ie all left rows + matched right rows 
-- select posts.title , users.name as author 
-- from posts left join users on posts.user_id = users.id;

-- right join gives all records in users and common in posts
-- even if that data is not available in posts table ie all right rows + matched left rows
-- select posts.title , users.name as author 
-- from posts right join users on posts.user_id = users.id;


-- Group by

-- number of posts made by each user
select users.name , count(posts.id) as post_count
from users left join posts on posts.user_id = users.id
group by (users.id,users.name);