/*
day-07.js

//adding metadata
@Day: Day 7
@Date: 2026-07-29
@Title: Everything you need to know about Functions
@Topics: Functions
@Color: #07d6a2
 
*/

// A Function can be declared in a variety of ways:
//1. Declaration Function
//function without parameters are declared as follows: 
function square() //function keyword functionName() 
{
let _num = 5
let _sq = _num *_num // logic of the function
console.log(_sq)
}
square() // calling the function 

function printName()
{
    let hpName= 'Harry'
    let hpSurname = 'Potter'
    let hisName = hpName + hpSurname
    console.log(hisName)
}
printName() 
//function that returns values,so you dont have to use console.log in the function 
function printHerName()
{
    let hgname = 'Hermoine '
    let hgsurname = 'Granger'
    let herName = hgname + hgsurname
    return herName
}
console.log(printHerName())

//In a function you are able to pass different datatypes (number,string,boolean,object + other functions) as parameters
function spell(spellName ,encantation ,power)
{
return `"${encantation} calls ${spellName} with a power of ${power}`
}
console.log(spell('Lumos', 'Lumos Maxima', 10))

//showcasing how a function takes arrays as a parameter
const d_arr = [567,87,12,5,6,1,88]
function differenceArrayValue(d_arr)
{
let diff = 0
for(let l = 0; l < d_arr.length ; l++)
{
    diff -= d_arr[l]
}
return diff
}
console.log("The difference of d_arr: " + d_arr.join('-'))
console.log(differenceArrayValue(d_arr))

//function that make use of an unlimited number of parameter
function productOfAllNums()
{
    let product = 1
    for(let k=0; k<arguments.length; k++)
    {
        product *= arguments[k]
    }
    return product
}
console.log(productOfAllNums(1,2,3,4,5,6))
console.log(productOfAllNums(13,24,35,46,57))

//2. Anonymous Function [nameless]
const anonymousFun = function()
{
    console.log('anonymousFun() ==> I am an anonymous function and my value is stored in anonymousFun')
}
anonymousFun();
//3. Expression Function 
//Expression functions are anonymous functions. 
// After we create a function without a name and we assign it to a variable => To return a value from the function we should call the variable
const triangle = function(x,y,z)
{
    const s = (x + y + z) / 2
    return Math.sqrt(s * (s - x) * (s - y) * (s - z))
}
console.log(triangle(11.5,13.5,16))

//4. Self-Evoking Function
//Self invoking functions are anonymous functions which do not need to be called to return a value.
let cubedNum = (function(b) {
  return b * b * b
})(11);

console.log(cubedNum)

//5.Arrow Function 
const changeToUpperCase = arr => {
  const newArr4 = []
  for (const element of arr) {
    newArr4.push(element.toUpperCase())
  }
  return newArr4
}
const countriez = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countriez))

//Function with def parameters
function greetings(name = 'Draco') {
  let message = `${name}, welcome to Hogwarts`
  return message
}

console.log(greetings())
console.log(greetings('Blaise'))