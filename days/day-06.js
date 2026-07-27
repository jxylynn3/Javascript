/*
day-06.js

//adding metadata
@Day: Day 6
@Date: 2026-07-26
@Title: Utilising Loops in Javascript
@Topics: Loops
@Color: #225e20
 
*/

//#1 FOR Loops
for(let i=0; i<= 5; i++) // for(initialization, condition, increment/decrement) {*code goes here*}
{
    console.log(i)
}

for(let a =0; a<= 5; a++)
{
    console.log(`${a} x ${a} = ${a * a}`)
}
//adding elements to an array using loops
const countries = ['Afganistan','Albania','Algeria','Andorra']
const countriesB = ['Bahamas','Bosnia and Herzegovina']
for(let b =0 ; b < countries.length ;b++ )
{
    countriesB.push(countries[b].toUpperCase())
    console.log(countriesB)
}

//adding all elements in an array
const numberss =[1, 2, 3, 4, 5]
let sum =0
for (let c =0; c< numberss.length; c++)
{
    sum += numberss[c]
}
console.log(sum)

//creating an array based on an existing array
//using const numberss =[]
const newArr3 = []
let sum1 =0
for (let d= 0; d<numberss.length; d++)
{
    newArr3.push(numberss[d] **2)
}
console.log(newArr3)

// #2 WHILE loopf
let e = 0
while (e <= 10 )
{
    console.log(e)
    e++
}
//#3 DO WHILE loop
let f = 10
do {
    console.log(f)
    f--
} while (f >= 0)

//#4 FOR OF loop
for (const numm of numberss) {
  console.log(numm)
}
// 1 2 3 4 5
for (const numm of numberss) {
  console.log(numm * numm)
}

// 1 4 9 16 25
// adding all the numbers in the array
let summ = 0
for (const numm of numberss) {
  summ = summ + numm  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(summ)

//practice
for (let g = 1; g <= 7; g++) {
    let row = "";
    for (let h = 1; h <= g; h ++) {
        row += "#";
    }
    console.log(row);
}
