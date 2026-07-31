/*
day-10.js

//adding metadata
@Day: Day 10
@Date: 2026-07-31
@Title: Everything you need to know about Sets + Maps
@Topics: Sets , Maps 
@Color: #100b77
*/

//A. Sets
/*
A Set is a collection whose only rule is: no duplicates.
That one property — guaranteed uniqueness — is the entire reason Sets exist. You don't reach for a Set because you need "a list."
You reach for it because you need a list where duplicates are meaningless or actively wrong.

Sets are perfect for:
De-duplicating data (e.g.removing repeat entries from a form submission log)
Fast "does this exist?" checks .has() is much faster than .includes() on large arrays
Set algebra — union, intersection, difference for comparing groups (e.g., "which nations are allied with both the Fire nation and the Water tribes?")
*/
// Empty set
const nations = new Set()
console.log(nations) // Set(0) {}

// From an array (duplicates are automatically dropped)
const elementsSpoken = ['Fire', 'Water', 'Earth', 'Fire', 'Air', 'Water']
const uniqueElements = new Set(elementsSpoken)
console.log(uniqueElements) // Set(4) {"Fire", "Water", "Earth", "Air"}
//adding,deleting,checking and clearing
const benders = new Set()
console.log(benders.size) // 0

benders.add('Kade')     // add() returns the Set itself, so calls are chainable
benders.add('Rin')
benders.add('Toma')
console.log(benders.size) // 3

benders.delete('Rin')          // removes one specific element
console.log(benders.has('Rin'))  // false — has() is the O(1) lookup mentioned above
console.log(benders.has('Kade')) // true

benders.clear() // wipes everything
console.log(benders) // Set(0) {}


//Set algebra: union, intersection, difference
const fireNationAllies  = new Set(['Water Tribe', 'Air Nomads', 'Earth Kingdom'])
const waterTribeAllies  = new Set(['Earth Kingdom', 'Air Nomads', 'Sky Islands'])

// UNION — everyone allied with at least one side
const allAllies = new Set([...fireNationAllies, ...waterTribeAllies])
console.log(allAllies)
// Set(4) {"Water Tribe","Air Nomads","Earth Kingdom","Sky Islands"}

// INTERSECTION — allied with BOTH sides
const mutualAllies = new Set(
  [...fireNationAllies].filter(nation => waterTribeAllies.has(nation))
)
console.log(mutualAllies) // Set(2) {"Air Nomads","Earth Kingdom"}

// DIFFERENCE — allied with Fire Nation but NOT Water Tribe
const fireOnlyAllies = new Set(
  [...fireNationAllies].filter(nation => !waterTribeAllies.has(nation))
)
console.log(fireOnlyAllies) // Set(1) {"Water Tribe"}

//B. Maps
/*
A Map is a key-value structure built to fix exactly that:
Keys can be any type — strings, numbers, objects, even functions — not just strings
Guaranteed insertion order when iterating
No inherited properties to worry about
A .size property (objects need Object.keys(obj).length)

Think of a Map as a lookup table or dictionary: "given this key, instantly tell me the associated value."
*/

//Creating and using a Map
// Empty map
const nationCapitals = new Map()
console.log(nationCapitals) // Map(0) {}

// From an array of [key, value] pairs
const capitalsData = [
  ['Fire Nation',  'Ember Isle'],
  ['Water Tribe',  'Frostgate'],
  ['Earth Kingdom','Stonehold'],
]
const capitals = new Map(capitalsData)
console.log(capitals)
// Map(3) {"Fire Nation" => "Ember Isle", "Water Tribe" => "Frostgate", "Earth Kingdom" => "Stonehold"}
console.log(capitals.size) // 3

//set(), get(), has()
const benderElements = new Map()
console.log(benderElements.size) // 0

benderElements.set('Kade', 'Fire')   // set() is chainable, like add() on Set
benderElements.set('Rin', 'Water')
benderElements.set('Toma', 'Earth')

console.log(benderElements.get('Rin'))     // "Water"
console.log(benderElements.has('Kade'))    // true
console.log(benderElements.has('Aria'))    // false

//Iterating a map
// Each entry comes out as a [key, value] pair
for (const entry of benderElements) {
  console.log(entry) // ["Kade", "Fire"], then ["Rin", "Water"], etc.
}

// Destructure directly for cleaner code
for (const [name, element] of benderElements) {
  console.log(`${name} bends ${element}`)
}



