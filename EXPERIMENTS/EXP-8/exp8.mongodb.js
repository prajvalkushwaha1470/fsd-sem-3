
/* global use, db */

// Experiment 8: MongoDB Student Operations

// Select database
use('studentDB');

// 1. Insert 5 student records
db.students.insertMany([
    { name: "Rahul", age: 19, branch: "CSE" },
    { name: "Aman", age: 21, branch: "IT" },
    { name: "Priya", age: 22, branch: "CSE" },
    { name: "Rohit", age: 20, branch: "ECE" },
    { name: "Sneha", age: 23, branch: "AIML" }
]);

// 2. Find students older than 20
db.students.find({
    age: { $gt: 20 }
});

// 3. Update Rahul's age using $set
db.students.updateOne(
    { name: "Rahul" },
    { $set: { age: 21 } }
);

// 4. Delete one student
db.students.deleteOne({
    name: "Rohit"
});

// 5. Display all remaining students
db.students.find();
