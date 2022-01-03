

-- https://www.tutorialspoint.com/sqlite/sqlite_create_database.htm
-- https://www.sqlite.org/datatype3.html
-- .database
-- .tables

CREATE TABLE users
(
    student_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    student_email TEXT,
    guardian_email TEXT,
    line_order_position INTEGER
);
-- SELECT * from users;
-- DROP TABLE users;


-- CREATE TABLE line_order
-- {
-- };

CREATE TABLE classroom
(
    name TEXT
);

-- ###
-- sqlite3 company.db < insert-data.sql

INSERT INTO classroom VALUES("Ms. Thurman");
INSERT INTO classroom VALUES("Ms. Baker");
INSERT INTO classroom VALUES("Ms. Manser");
INSERT INTO classroom VALUES("Ms. Walker");
INSERT INTO classroom VALUES("Ms. Maletta");

INSERT INTO users VALUES (1514981, 
                          "Olivia",
                          "Bruckart",
                          "olivia.bruckart@gmail.com",
                          "janine.bruckart@gmail.com",
                          4);
INSERT INTO users VALUES (1611628, 
                          "Eliana",
                          "Bruckart",
                          "eliana.bruckart@gmail.com",
                          "janine.bruckart@gmail.com",
                          2);
INSERT INTO users VALUES (NULL, 
                          "Aiden",
                          "Bruckart",
                          "aiden.bruckart@gmail.com",
                          "janine.bruckart@gmail.com",
                          1);


INSERT INTO users VALUES ()

