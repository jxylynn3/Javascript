/*
day-11.js

//adding metadata
@Day: Day 11
@Date: 2026-08-01
@Title: Everything you need to know about Destructuring + Spread
@Topics: Destructuring and Spread in arrays 
@Color: #6b27ba
*/
 
//A. Array Destructuring
//this is the process of unpacking values from an array in singular named variables.
// Crew roster in delivery order
const crew = ['Fry', 'Leela', 'Bender']
let [delivery1, delivery2, delivery3] = crew
console.log(delivery1, delivery2, delivery3) //expected: Fry, Leela , Bender
// Ship diagnostics readout
const shipStats = [3000, 2.5, 9000, 1]
let [year, fuelLevel, hullIntegrity, crewCount] = shipStats
console.log(year, fuelLevel, hullIntegrity, crewCount)//Expected: 3000,2.5,9000, 1

//dealing with nested arrays
// Two departments at Planet Express
const departments = [
  ['Fry', 'Leela', 'Bender'],
  ['Farnsworth', 'Hermes', 'Zoidberg']
]
const [delivery, staff] = departments
console.log(delivery) // ['Fry', 'Leela', 'Bender']
console.log(staff)    // ['Farnsworth', 'Hermes', 'Zoidberg']

//now lets say you want to skip elements within the array
// Only need the first and last crew member on this run
const crewRun = ['Fry', 'Leela', 'Bender', 'Amy']
let [pilot, , , intern] = crewRun 
console.log(pilot, intern) // Fry & Amy

//lets say you have a undefined value ,what would happen
//the array would fall back to the def. value, or only defined value available
// Zoidberg forgot to log his own crew ID
const crewIDS = [undefined,'lee-001' ,'bend-002']
let [fryIDS ,leelaIDS , benderIDS] = crewIDS
console.log(fryIDS, leelaIDS, benderIDS) 
//vs
const crewIds = [undefined, 'LEE-01', 'BND-22']
let [fryId = 'FRY-00',leelaId,benderId] = crewIds
console.log(fryId, leelaId, benderId)


//B. Rest pattern in arrays
//there purpose isd to collect the remaining elements in an array without manual re-inputtting
// Delivery manifest ==> first three stops matter, rest goes in one batch
const stops = ['Mars', 'Neptune', 'Omicron Persei 8', 'Decapod 10', 'Earth']
let [stop1, stop2, stop3, ...remainingStops] = stops //...remainingStops is a var that is holding the other elements together in a group

console.log(stop1, stop2, stop3)// Mars Neptune 'Omicron Persei 8'
console.log(remainingStops)// ['Decapod 10', 'Earth']

//how to destructure during iteration
// Pilot-and-destination pairs for the week
const routes = [
  ['Leela', 'Mars'],
  ['Fry', 'Neptune'],
  ['Bender', 'Cygnus']
] // array here
for (const [pilot, destination] of routes) {
  console.log(pilot, destination)// for all the [pilot, dest] within routes, print the pilot and destination
}

//object destructuring
//unpaking values from objects created, i think is works similar to accessing Attribute from a SQL table using the query SELECT * FROM table WHERE attribute = value
// Bender's spec sheet
const bender = {
  model: 'Bending Unit--22',
  material: 'metal and booze',
  badHabits: 3
}

let { model: m, material: mat, badHabits: habits } = bender
console.log(m, mat, habits)

//working with defaullts in ogj
// Amy's file is missing a rank, give it a fallback
const amy = {
  name: 'Amy Wong',
  department: 'Intern'
}
let { name, department, rank = 'Junior-Intern' } = amy
console.log(name, department, rank)
// Amy Wong Intern Junior-Intern

//objests as a functions parameter
// Ship dimensions object
const ship = { length: 90, width: 40 }

const calculateHullArea = shipObj => 
{
  return shipObj.length * shipObj.width
}
console.log(calculateHullArea(ship)) 
//with destructuring
const calculateHullAreaV2 = ({ length, width }) => {
  return length * width
}
console.log(calculateHullAreaV2(ship)) // 3600
//destucturing with obj during loops
const deliveries = [
  { item: 'Crate of anchovies', destination: 'Mars', delivered: true },
  { item: 'Suspicious package', destination: 'Cygnus', delivered: false },
  { item: 'Farnsworth invention', destination: 'Earth', delivered: false }
]
for (const { item, destination, delivered } of deliveries) { //for every elements in deliveries,break up each obj by 3 criteria
  console.log(item, destination, delivered)
}

//C. Spread operator

//coptying an array
// Duplicate the crew roster without mutating the original
const originalCrew = ['Fry', 'Leela', 'Bender']
const backupCrew = [...originalCrew]

console.log(backupCrew)
//merge arrays
// Combine two department rosters into one company-wide list
const deliveryTeam = ['Fry', 'Leela', 'Bender']
const staffTeam = ['Farnsworth', 'Hermes', 'Zoidberg']
const fullCompany = [...deliveryTeam, ...staffTeam]
console.log(fullCompany)

//copy + override an object
// Clone Bender's profile without touching the original object
const benderProfile = {
  name: 'Bender',
  role: 'Bending Unit',
  planet: 'Earth'
}
const clonedBender = { ...benderProfile }
console.log(clonedBender)
// Same clone, but Zoidberg gets promoted in the copy only
const zoidberg = {
  name: 'Zoidberg',
  role: 'Staff Doctor',
  planet: 'Decapod 10'
}
const promotedZoidberg = { ...zoidberg, role: 'Chief Medical Officer' }
console.log(promotedZoidberg)
console.log(zoidberg.role) 


// using spread in arrow functions as a rest parameter
//you do this when you need to accept a number of arguments [...args] in the array
// Log however many delivery stops get passed in, any number at all
const logStops = (...stops) => {
  console.log(stops)
}
logStops('Mars', 'Neptune', 'Cygnus')
// Total up Bender's stolen goods count, however many values come in
const totalStolenGoods = (...counts) => {
  let total = 0
  for (const count of counts) {
    total += count
  }
  return total
}
console.log(totalStolenGoods(4, 12, 3, 7))