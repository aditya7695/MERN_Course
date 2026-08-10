-- Query to craete the table 

create table users(
    id serial,
    name varchar(50),
    email varchar(100),
    role varchar(25) default 'user',
    created_at timestamp default now()
)
-- Insert values into table
-- insert into users (name , email) values ('gaurav' , 'gaurav@gmail.com');

-- Display all data from the table
-- select * from users;

-- Display Selected data from the table
-- select name,email,role from users;

-- Displaying data as soon as you insert it into the table
-- insert into users (name , email) values ('aditya' , 'aditya@gmail.com')
-- returning id, name , created_at ;

-- insert multiple data into the table

-- insert into users(name,email) values 
-- ('pritesh','pritesh@gmail.com'),
-- ('prajwal','prajwal@gmail.com')
-- returning id,name,created_at;

-- where command 
-- getting the user whose id = 1

-- select * from users where id = 1;

-- getting all the users with role as admin 

-- select name from users where role='admin'

-- updating the role fom user to manager

-- update users set role = 'manager' where id = 3 
-- returning name,role;

-- deleting data from the table
-- here where is very important ie. if you do not specify where it will delete all table data

-- delete from users where id = 2;

-- select * from users

-- alter table users add column age integer default 21;

-- HW how to delete a column

-- oredering details in the table by id

-- descending order
-- select * from users order by id asc;

-- ascending order
-- select * from users order by id desc;
-- or 
-- select * from users order by id;

-- oldest user details
-- select * from users order by age desc limit 1;

-- youngest user details
-- select * from users order by age asc limit 1;

-- select * from users where age > 20;

-- case sensetive checking 
-- select * from users where name like 'Pritesh';

--  case insensitive checking
-- select * from users where name ilike 'Pritesh';

-- begining with pri
-- select * from users where name ilike 'pri%';

-- ends with ya
-- select * from users where name ilike '%ya';

-- checks for a anywhere
-- select * from users where name ilike '%a%';

-- second letter should be 'd'
-- select * from users where name ilike '_r%'
