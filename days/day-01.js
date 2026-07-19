/*
introduction.js
will showcase of the basics use of JavaScript, including variables, data types, functions, and control flow statements.
This file serves as an introductory guide for beginners to understand the fundamental concepts of JavaScript programming. 


 //adding metadata
@Day: Day 1
@Date: 2026-07-19
@Title: Introduction to JavaScript Basics
@Topics: Variables, Objects, Functions, Control Flow, Scope
@Color: #c03124
 
*/

console.log("Welcome to the JavaScript Introduction!"); //this is used to showdev message in console

//declaring variables
let firstName = "John" //string variable
let lastName = "Smith" //string variable
let age = 30
let country = "USA"
let city = "New York"
let maritalStatus = "single"
let isEmployed = true //boolean variabl
let occupation = "Software Engineer" 
let strengths = ["Problem Solving", "Teamwork", "Communication"]

//declaring variables with const
const graduationYear = 2022 
const undergradduration = 4 


// declaring through the use of 1 let statement (this is a good practice to declare multiple variables in one statement)\
let wifename = "Alice",
    wifelastname = "Denver",
    wifeage = 28,
    wifecountry = "USA",
    wifecity = "New York",
    wifemaritalStatus = "single",
    wifeisEmployed = true, 
    wifeoccupation = "Nurse",
    wifestrengths = ["Adaptability", "Empathy", "Leadership"];


//declaring an object to represent a person 
let husband = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    country: "USA",
    city: "New York", 
    maritalStatus: "single",
    isEmployed: true,
    occupation: "Software Engineer",
    strengths: ["Problem Solving", "Teamwork", "Communication"]
};  
console.log(husband.firstName); //this line will print the first name of the husband object to the console
console.log(husband); //prints the whole object to the console

let wife = {
    firstName: "Alice",
    lastName: "Denver",
    age: 28,
    country: "USA",
    city: "New York",
    maritalStatus: "single",
    isEmployed: true,
    occupation: "Nurse",
    strengths: ["Adaptability", "Empathy", "Leadership"]
};


// declaring a function with parameters
// we showing how a fuction is different from a method, a function is a block of code that can be called and executed,
//  while a method is a function that is associated with an object and can access the object's properties and methods.
function introducePerson(husband) {
    console.log(`Hello, my name is ${husband.firstName} ${husband.lastName}. I am ${husband.age} years old and I live in ${husband.city}, ${husband.country}. I am a ${husband.occupation} and my strengths are ${husband.strengths.join(", ")}.`);
 }
 function introduceperson2(wife) {
    console.log(`Hello, my name is ${wife.firstName} ${wife.lastName}. I am ${wife.age} years old and I live in ${wife.city}, ${wife.country}. I am a ${wife.occupation} and my strengths are ${wife.strengths.join(", ")}.`);
 }
  //call a function
  console.log(introducePerson(husband)); //this line will call the introducePerson function and pass the husband object as an argument
  console.log(introduceperson2(wife)); //this line will call the introduceperson2 function and pass the wife object as an argument

 
// methods here:
// this is a method that will look at the separate objects and change the wife's marital status to married and the husband's marital status to married,as well a change her lastname
// checks if lawfully married by makein sure wife.obj lastname is the same as husband.obj lastname.
islawfullymarried = function(husband, wife) {
    return husband.lastName === wife.lastName; //returns true if the last names are the same, false if they are different
}
//marriage method changes last name of wife to husband's last name and changes marital status of both husband and wife to married
const marriage = function(husband, wife) {
    if (islawfullymarried(husband, wife) === false) { //
wife.lastName = husband.lastName; //change the wife's last name to the husband's last name
wife.maritalStatus = "married"; //change the wife's marital status to married
husband.maritalStatus = "married";
return true; //return true if the marriage was successful
    }
return false; //return false if the marriage was not successful
};
 

//using readline,console prompting {CONST}
const readline = require('readline').createInterface({ // createInterface works like the joptionpane from java
    input: process.stdin, //initialzing with : , == isnt used for initialization, it is used for comparison, the single = is used for assignment
    output: process.stdout 
});

function promptUser() {
    readline.question('Are you married? (yes/no): ', (answer) => {
        const holdboolean = answer.toLowerCase().trim();

//structure to call a function before an IF statement is as
//convert the answer to lowercase and trim any whitespace
if (holdboolean === 'yes') { //if the answer is yes, then the user is married
     //check marital status of husband and wife, if they are not married, then change their marital status to married
      let resultingmStatus = marriage(husband, wife);
     if (resultingmStatus === true) {
        console.log(`Congratulations! ${wife.firstName} ${wife.lastName} and ${husband.firstName} ${husband.lastName} are now married.`);
     }
     else {
        console.log("Failed to update marital status.");
     }
    }
    else if (holdboolean === 'no') { //if the answer is no, then the user is not married
    console.log("You are not married.");
}
 else {holdboolean !== 'yes' && holdboolean !== 'no' //if the answer is not yes or no, then the user is not married
    console.log("Invalid input. Please answer with 'yes' or 'no'.");
}
}
);
}
promptUser(); //call the promptUser function to start the program

