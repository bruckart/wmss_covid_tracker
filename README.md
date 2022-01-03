


# Overview

This repository contains a web application which illustrates tracking COVID-19
infections via a classroom seating chart and line order. This was designed and
developed for my daughter's 6th grade science project. This application contains
the a front page (index.html).



# Algorithm/Testing Procedure:
1. The user creates a student record for each student in the class. This includes student name, student number, and guardian email and phone number.
./users ROUTE

./add_user takes you to public/add_user.html
public/add_user.html submits to add_user.js

What about:
public/users/add
public/users/delete
public/users/




2. The user selects to create a classroom seating chart. Each seat will be given a coordinate on a map to determine how many feet it is from any other seat.


3. The user assigns a student record for each seat in the seating chart.
4. The user creates a line order chart for when the students are in line to leave the classroom for any reason. 5. Each line position will be given a coordinate on a map to determine how many feet it is from any position in the line.
6. The user assigns a student to each place in the line order chart.
7. If a student is determined to be COVID positive, the user selects to report the COVID positive student and enters the student number into the program.
8. The program calculates any student within 6 feet of the covid positive student from the seating and line order charts.
9. The program presents the user a list of student records of the students who have been exposed (within 6 feet) to the covid positive student and asks the user if they would like to email the exposed students’ parents.
10. If the user decides to not email the parents, they can select the option “No.”
11. If the user decides to email the parents, they select the “Yes” option and a pre-made email informing the parents that the student has been exposed and needs to be picked up from school will be sent out automatically. 


# Installing

This application was built with node.js 