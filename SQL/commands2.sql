-- create table users (
--     id serial,
--     name varchar(50),
--     email varchar(100),
--     role varchar(50) default 'user',
--     created_at timestamp default now(),
--     age Integer
-- );

-- insert into users (name , email , role , age) values 
-- ('aditya','aditya@gmail.com','user',20),
-- ('pritesh','pritesh@gmail.com','manager',30),
-- ('prajwal','prajwal@gmail.com','admin',18),
-- ('asish','asish@gmail.com','manager',50),
-- ('aish','aish@gmail.com','user',70);

-- select * from users where age > 30 and role ilike 'user';

-- select * from users where age > 30 or role ilike 'user';


-- here the output will be 18 20 and 30

-- select * from users where age > 17 and age < 31;


-- here also same output 18 20 and 30

-- select * from users where age between 18 and 30;


-- it will give the values that are specified in the barcket

-- select * from users where age in (18,30);


-- select * from users where age > 17 and age < 31;
-- select * from users where age in (18,30);


-- This is called subquery. a query inside query

-- select * from users where age in (select age from users where age > 17 and age < 30);


-- select * from users where role ilike 'manager' order by age asc;

-- select * from users where role ilike 'user' and age > 50


-- create table posts(
--     id serial primary key,
--     title text not null,
--     body text,

--     user_id int references users(id) on delete cascade,
--     created_at timestamp default now()
-- )


-- primary keyn is that column of the table that identifies every row in that table 

-- user_id int refrences isers(id) => this is how we connect the 2 tables

-- delete cascade -> id the data is deleted in the parent table it shoudl be reflacted in the child tables

--  a foregin key is a column (or a set of columns ) in one SQL table 

-- that provides a link to the primary key in another table

-- insert into posts(title , body , user_id) values 
-- ('aditya title 1','aditya body 1',6),
-- ('aditya title 2','aditya body 2',6),
-- ('aditya title 3','aditya body 3',6),
-- ('pritesh title 1','pritesh body 1',7);

-- select * from posts;

-- counting records from table

-- select count (*) from users;

-- select count (*) from posts;
