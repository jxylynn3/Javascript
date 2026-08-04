/*
day-13.js

//adding metadata
@Day: Day 13
@Date: 2026-08-04
@Title: Intro to Console Object methods 4 Debugging
@Topics: .log(), .error(), .warn(), .info(), .assert(), .clear(), .count(), .countReset(), .group(), .groupEnd(), .table(), .time(), .timeEnd()
@Color: #b100be
 
*/
//1. .log() => used for basic outputs
console.log('Star Butterfly has arrived on Earth')
// Substitution: %s = string, %d = number
// Handy when you don't want to glue strings together with +
console.log('%s is the princess of %s', 'Star', 'Mewni')
console.log('Star has used her wand %d times today', 7)
 
// %c lets you style the log text with CSS — only works in a browser console
console.log('%cMagic High Commission', 'color: gold; font-weight: bold;')
console.log(
  '%cStar%c %cvs%c %cthe Forces of Evil%c',
  'color: hotpink',
  '',
  'color: gray',
  '',
  'color: crimson',
  ''
)
//2. .warn() => used to output warning messages
// Use this for "heads up" situations — the code still runs,
// but something deserves attention.
console.warn('Marco is about to cross into Mewni without a plan')
console.warn('Star is combining spells she has never tried together')

//3. .error() => used to output error messages
console.error('The wand has been shattered')
console.error('Ludo failed to steal the wand — again')

//4. .table() => used to output arrays/objects in a table format
const heroes = ['Star Butterfly', 'Marco Diaz', 'Tom Lucitor', 'Pony Head', 'Janna Ordonia']
console.table(heroes)
 
// Single object → key + value columns
const star = {
  name: 'Star Butterfly',
  title: 'Princess of Mewni',
  weapon: 'Royal Magic Wand',
  bestFriend: 'Marco Diaz'
}
console.table(star)
 
// Array of arrays → numbered columns
const dimensions = [
  ['Mewni', 'Butterfly Castle'],
  ['Earth', 'Echo Creek'],
  ['Underworld', "Tom's Lair"]
]
console.table(dimensions)
 
// Array of objects → one column per key, this is where console.table() shines
const villains = [
  { name: 'Ludo', threatLevel: 2, wantsWand: true },
  { name: 'Toffee', threatLevel: 10, wantsWand: false },
  { name: 'Eclipsa Butterfly', threatLevel: 6, wantsWand: false },
  { name: 'Meteora Butterfly', threatLevel: 9, wantsWand: false }
]
console.table(villains)

//5. .time() + .timeEnd() => used to measure how long an operation takes
// Every timer needs a unique label. Start it, do the work, then
// call timeEnd() with the SAME label to see how long it took.
const monsterArmy = ['Ludo', 'Buff Frog', 'Boo Fly', 'Rasticore', 'Toffee']
 
console.time('regular for loop')
for (let i = 0; i < monsterArmy.length; i++) {
  console.log(monsterArmy[i])
}
console.timeEnd('regular for loop')
 
console.time('for...of loop')
for (const monster of monsterArmy) {
  console.log(monster)
}
console.timeEnd('for...of loop')
 
console.time('forEach loop')
monsterArmy.forEach((monster) => console.log(monster))
console.timeEnd('forEach loop')


//6. .info() => used to output informational messages
console.info('Star is next in line for the throne of Mewni')
console.info('Marco has earned his red belt in karate')
console.info('Tom Lucitor rules the Underworld with his family')

//7. .assert() => used to test if a condition is true, if not it will output an error message
// If the first argument is true, nothing happens at all.
console.assert(4 > 3, 'Marco has more than 3 karate belts') // silent, 4 > 3 is true
console.assert(
  villains.length === 0,
  'The villains array should be empty, but it is not'
) // this WILL print, since the array has 4 villains
 
for (const monster of monsterArmy) {
  const isToffee = monster === 'Toffee'
  console.assert(!isToffee, { warning: `${monster} is the true threat`, monster })
}

//8. .group() + .groupEnd() => used to group related log messages together
console.group('--- Mewni Royal Family ---')
console.log('Queen Moon Butterfly')
console.log('King River Butterfly')
console.log('Princess Star Butterfly')
console.groupEnd()
 
console.group('---Diaz Household ---')
console.log('Marco Diaz')
console.log('Rafael Diaz')
console.log('Angie Diaz')
console.groupEnd()
 
console.group('--- Known Villains ---')
console.table(villains)
console.groupEnd()

//9. .count() => track how many times something runs
const castASpell = () => {
  console.count('Spell cast')
}
castASpell() 
castASpell() 
castASpell()

//10. .clear() => clears the console
// Not called here on purpose — it would erase everything above.
// In a real debugging session you'd run this between test rounds:
// console.clear()