
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../wmss_covid_tracker.db');



// INSERT INTO users VALUES (1514981, 
//     "Olivia",
//     "Bruckart",
//     "janine.bruckart@gmail.com",
//     4);


// // Retrieving All users
// // console.log("\"user\" Table");
// db.all("INSERT INTO users \
//         student_id, \
//         first_name, \
//         last_name, \
//         guardian_email, \
//         line_order_position \
//         FROM users", (error, rows) => {
//     rows.forEach((row) => {
//         console.log(row.first_name + " " + row.last_name);
//     })
// });
