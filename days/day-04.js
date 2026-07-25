/*
learnt about the use of cases of various types of conditional statements

 //adding metadata
@Day: Day 4
@Date: 2026-07-23
@Title: Introduction to JavaScript:Conditionals
@Topics: if...else ,Switch and Ternanry operators
@Color: #64af03
 
*/
//#1 IF statements
//they work well for simple login
//syntax
let condition = "example"
if (condition){
//subsequent result or steps
console.log (condition)
}
//if statement are used in cases where we only want to showcase 1 condition
let age = Math.floor(Math.random()* 100)+1
if(age >= 18)
{
console.log("You are allowed to vote!")
}


//#2 IF...ELSE statements
//used when there are exactly two possible outcomes( things like coins flips or T/F statements)
let password = "Password123"
let storedpassword = "Password1234"
if(password == storedpassword)
{
    console.log("{200},Login successful")
}
else{
    console.log("{400},Login Failed")
}
 
//#3 IF...IF ELSE...ELSE statement 
// this is typically used when there are multiple outcomes to a statement
if(condition){
//1st result
}else if(condition){
//2nd - Nth result
}
else{
//default result
}
// i prefer switch cases though
//#4 Switch
let variable = 1
value = 2
switch(variable){
    //1st condition
    case value:
        //subsequent results
        break; // ends and separates cases

    case value:
        break;
//default and fall-back choice
    default:
}
const day = new Date() //get the date using DATE OBJECT
day.setDate(day.getDate()+4) // adding 4 days to the current date 
const futureday =day.toLocaleDateString("en-US",{weekday : "long"}) // the toLocaleDateString formats Date in the US DATE/Time convention. 
// the weekday: long specifies we only need the Day of the week
switch(futureday){
case "Monday":
console.log("Still working")
break;
 case "Tuesday":
    console.log("Still working")
    break;
    case "Wednesday":
console.log("Still working")
break;
 case "Thursday":
    console.log("Still working")
    break;
case "Friday":
    console.log("Working")
    break;
case "Saturday":
console.log("Fishing trip")
break;
 case "Sunday":
    console.log("Church + rest")
    break;
default:
console.log("IDK what to do?")
}

//Activity
//Asks the user for their age using Node's readline.
const readline = require("readline").createInterface({
    input: process.stdin,
    output:process.stdout
})
 function promptUser() {
    readline.question("How old are you?:  ", (ageanswer) => {
        const holdage = Number(ageanswer)
        readline.close() //dont forget to close !!
        //Uses if...else to determine if they're an adult.
 if(holdage >= 18)
 {
console.log("Legal Adult")
 }
 else{
    console.log("still a child")
 }
//Uses ternary to determine if their age is even or odd.
const isEven = (holdage) % 2 === 0
console.log(isEven
    ? `${holdage} is even`
    :`${holdage} is odd`
)
/*Uses if...else if...else to classify them as:
Child (0–12)
Teen (13–17)
Adult (18–64)
Senior (65+)
*/
if(holdage <= 12){
//1st result
console.log("Child (0-12)")
}else if(holdage >= 13 && holdage <= 17 ){
//2nd - Nth result
console.log("Teen (13-17)")
}else if(holdage >= 18 && holdage <= 64){
console.log("Adult (18-64)")
}else if(holdage >= 65){
console.log("Senior (65+)")
}
else{
//default result
console.log("Nothing was added, and so i couldnt check")
}
//Uses a switch to print a message for the current day (Monday–Sunday).
const day = new Date() //get the date using DATE OBJECT
day.setDate(day.getDate()) // adding 4 days to the current date 
const today_day =day.toLocaleDateString("en-US",{weekday : "long"}) // the toLocaleDateString formats Date in the US DATE/Time convention. 
// the weekday: long specifies we only need the Day of the week
switch(today_day){
case "Monday":
console.log(`${today_day} !`)
break;
 case "Tuesday":
    console.log(`${today_day} !`)
    break;
    case "Wednesday":
console.log(`${today_day} !`)
break;
 case "Thursday":
console.log(`${today_day} !`)
    break;
case "Friday":
  console.log(`${today_day} !`)
    break;
case "Saturday":
console.log(`${today_day} !`)
break;
 case "Sunday":
  console.log(`${today_day} !`)
    break;
default:
console.log("IDK what to do?")
}
})}
promptUser();  