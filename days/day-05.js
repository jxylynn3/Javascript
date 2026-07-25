/*

 //adding metadata
@Day: Day 5
@Date: 2026-07-25
@Title: Arrays 101
@Topics: Arrays
@Color: #55812d
*/

//Arrays can be created in two different
//1. array constructor
const arr = Array() // let can also be used
//2. this is the recommendedway top create an empty list
const arr1 = []

//using .length on arrays with initial values
const numbers = [0, 3.14, 6, 9.8, 22.5, 33]
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] 
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

//create an array using .split
let js = "30 days of JavaScript"
const charsInJs = js.split('')

//accessing items using index
let tweedeVrugte = fruits[1]
console.log(tweedeVrugte)
let lastAnimal = animalProducts.length -1
console.log(lastAnimal)

//create and fill array with static values
//made at 1
const xs = Array(8).fill('x')
//concatenating arrays
const shoppinglist = fruits.concat(animalProducts.concat(vegetables))
console.log (shoppinglist)

//Getting index an element in arr array
//indexOf:To check if an item exist in an array. 
//If it exists it returns the index else it returns -1.
console.log(numbers.indexOf(33)) // -> 33
console.log(numbers.indexOf(8)) // -> -1

//Checking array ==> To check if the data type is an array
console.log(Array.isArray(numbers))

//converting an array to a String
console.log(shoppinglist.toString())
//joining array elements with string parameter
console.log(numbers.join('* '))
console.log(shoppinglist.join(','))
//add element using push 
shoppinglist.push('Chocolate')
console.log(shoppinglist)

//Add an element from the beginning, using unshift

numbers.unshift(-45)
console.log(numbers)

//Sorting and Unsorting arrays
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs) 

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs)
