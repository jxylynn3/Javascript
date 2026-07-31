/*
   FOUR NATIONS LEDGER [avatar inspired <33]
   A Sets & Maps mini project
 */


// 1. SET — unique element types practiced across the world
const practicedElements = [
  'Fire', 'Water', 'Earth', 'Air',
  'Fire', 'Water', 'Fire', 'Earth',
]

const uniqueElements = new Set(practicedElements)
console.log('Unique elements in practice:', uniqueElements)
// Set(4) {"Fire", "Water", "Earth", "Air"}
console.log('Total distinct elements:', uniqueElements.size) // 4


// 2. SET — managing a nation's roster of active benders
const activeBenders = new Set()
activeBenders.add('Kade')
activeBenders.add('Rin')
activeBenders.add('Toma')
activeBenders.add('Aria')
console.log('Active benders:', activeBenders) // Set(4) {...}

activeBenders.delete('Toma') // Toma retired from active duty
console.log('Is Toma still active?', activeBenders.has('Toma')) // false
console.log('Roster size after retirement:', activeBenders.size) // 3

// 3. SET ALGEBRA — comparing alliances between nations
const fireNationAllies = new Set(['Water Tribe', 'Air Nomads', 'Earth Kingdom'])
const waterTribeAllies = new Set(['Earth Kingdom', 'Air Nomads', 'Sky Islands'])

const allAllies = new Set([...fireNationAllies, ...waterTribeAllies]) // UNION
const mutualAllies = new Set(
  [...fireNationAllies].filter(n => waterTribeAllies.has(n))
) // INTERSECTION
const fireOnlyAllies = new Set(
  [...fireNationAllies].filter(n => !waterTribeAllies.has(n))
) // DIFFERENCE

console.log('All allies (union):', allAllies)
console.log('Mutual allies (intersection):', mutualAllies)
console.log('Fire-only allies (difference):', fireOnlyAllies)

// 4. MAP — nation to capital city lookup
const nationCapitals = new Map([
  ['Fire Nation',   'Ember Isle'],
  ['Water Tribe',   'Frostgate'],
  ['Earth Kingdom', 'Stonehold'],
  ['Air Nomads',    'Cloud Spire'],
])

console.log('Capital of Water Tribe:', nationCapitals.get('Water Tribe')) // "Frostgate"
console.log('Do we have data on Sky Islands?', nationCapitals.has('Sky Islands')) // false

// 5. MAP — bender name to element assignment
const benderElements = new Map()
benderElements.set('Kade', 'Fire')
benderElements.set('Rin', 'Water')
benderElements.set('Aria', 'Air')
benderElements.set('Toma', 'Earth')
benderElements.set('Nia', 'Fire')
benderElements.set('Beck', 'Water')
benderElements.set('Sol', 'Fire')

console.log('\nBender roster:')
for (const [name, element] of benderElements) {
  console.log(`  ${name} bends ${element}`)
}


// 6. SET + MAP TOGETHER — counting benders per element
//    (the classic "de-duplicate categories, then tally" pattern)
const allElementsPracticed = new Set(benderElements.values())
// Set gives us the unique category list: {"Fire", "Water", "Air", "Earth"}

const elementCounts = new Map()
for (const element of allElementsPracticed) {
  const bendersOfThisElement = [...benderElements.values()].filter(
    (el) => el === element
  )
  elementCounts.set(element, bendersOfThisElement.length)
}

console.log('\nBenders per element:')
for (const [element, count] of elementCounts) {
  console.log(`  ${element}: ${count}`)
}
// Fire: 3
// Water: 2
// Air: 1
// Earth: 1