
// https://medium.com/@codesprintpro/getting-started-sqlite3-with-nodejs-8ef387ad31c4

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../wmss_covid_tracker.db');


// //Executing run() Method
// db.run(`INSERT INTO users( \
//         student_id, \
//         first_name, \
//         last_name, \
//         student_email, \
//         guardian_email, \
//         line_order_position) VALUES(?)`, 
//     ['Rock'],
//     function(error){
//         console.log("New playlist added with id " + this.lastID);
//     }
// );

// Retrieving All users
// console.log("\"user\" Table");
db.all("SELECT student_id, \
               first_name, \
               last_name, \
               student_email, \
               guardian_email, \
               line_order_position \
               FROM users", (error, rows) => {
    rows.forEach((row) => {
        console.log(row.first_name + " " + row.last_name);
    })
});
