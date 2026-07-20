/*
day-02.js
 ==> 

//adding metadata
@Day: Day 2
@Date: 2026-07-20
@Title: DataTypes 101
@Topics: Data Types, Strings, Numbers, Checking Data Types + Casting
@Color: #da7013
 
*/

// A:showcasing primitive data types in JavaScript
//primitive data types are as follows: string, number, boolean, null, undefined, symbol 
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo) 
let js = "JavaScript"
let py = "Python"
console.log ( js == py) //this line will print false to the console because js is a string and py is a string
let isRaining = true
let isSunny = false
console.log(isRaining == isSunny) //this line will print false to the console because isRaining is a boolean and isSunny is a boolean

//non primitive data types are as follows: object,arrays
//#1 Trying to compare 2 arrays with ==
let numb =[ 2,4,6,8,10]
let num=[2,4,6,8,10]
console.log(numb == num) //false,different in memory

//#2 comparing 2 string type array with ==
let fruits = ["apple", "banana", "cherry"]
let vrugte = ["apple", "banana", "cherry"]
console.log(fruits == vrugte) //false, different in memory
//but they can be the same if reference them
let fruit = vrugte
console.log(fruit == vrugte) //true, same in memory

//B:Numbers
let age = 30
const gravity = 9.81
let mass = 72
const PI = 3.14
let boilingPoint = 100
let bodyTemp = 37
console.log("Age:", age, "Gravity:", gravity, "Mass:", mass, "PI:", PI, "Boiling Point:", boilingPoint, "Body Temperature:", bodyTemp) //this line will print the values of the variables to the console

const Sqrt =Math.SQRT2
console.log(Sqrt) //this line will print the square root of 2 to the console
console.log(Math.round(Sqrt)) 
console.log(Math.ceil(Sqrt))
console.log(Math.floor(Sqrt))
console.log(Math.trunc(Sqrt))
console.log(Math.min(0, 150, 30, 20, -8, -200))
console.log(Math.max(0, 150, 30, 20, -8, -200))

const randomNumber = Math.random()
console.log(randomNumber)  //basic random number between 0 and 1
//to create a random number between 5 and 150
let nomber = Math.floor(Math.random()* 150)+5 //edit the sufffix ...(Math.random()*max)+min)
console.log(nomber)
let x = nomber * (Math.random()*1500 -25) // this will multiple nomber by a random -25 to 1500
console.log(x)
//C:Strings
let firstName ="Runin"
let lastName =" Fang"
let occupation = " soldier"
let personalinfo =  firstName + lastName +" is a"+ occupation
console.log(personalinfo) 
/*
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:
    \n: new line
    \t: Tab, means 8 spaces
    \\: Back slash
    \': Single quote (')
    \": Double quote (")
*/

//the use template literals when you want to include variables or expressions inside a string. Template literals are enclosed by backticks (`) instead of single or double quotes. You can use ${} to embed variables or expressions within the string.
let fullName = `${firstName} ${lastName}`
console.log(fullName) //this line will print the full name to the console
let sentence = `${firstName} ${lastName} is a${occupation}`
console.log(sentence) //this line will print the sentence to the console


let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)

//get the lastindex if yo cant be asked to check the length of the string
let lastIndex = string.length - 1
console.log(lastIndex)  // 9
console.log(string[lastIndex]) 
//uppercase
console.log(string.toUpperCase())
//lowercase
console.log(string.toLowerCase())
//substring ==> is used when you want to extract a apart of a string,by taking the 1st and last index as parameters
console.log(string.substring(4,4)) //nothing
console.log(string.substring(0,4)) //java, the index counts from 0
console.log(string.substring(4,10))//Script, the index 10 stands for the last index with nothing

let welcome = ' -30 Days Of JavaScript- '
console.log(welcome.split()) //['30 Days Of JavaScript']
console.log(welcome.split(' ')) //['30', 'Days', 'Of', 'JavaScript']
//trim() ==> is used to remove whitespace from both ends of a string
console.log(welcome.trim()) //30 Days Of JavaScript
console.log(welcome.trimStart()) //30 Days Of JavaScript
// includes() ==> is used to check if a string contains a substring or not, it returns true or false
console.log(welcome.includes('Days')) //true
console.log(welcome.includes('days')) //false, case sensitive
console.log(welcome.includes('JavaScript')) //true
console.log(welcome.includes('javaScript')) //false, case sensitive
