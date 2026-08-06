
/*
day-15.js
 
//adding metadata
@Day: Day 15
@Date: 2026-08-06
@Title: Intro to JavaScript classes 
@Topics:Classes,Getters, setters,Inheritance
@Color: #c60271
 
*/
 
//Class: uses the keyword 'class' + CamelCasing identifier, and then the body
/*
class ClassName {
  // code goes here
}
*/
//Instantiation: create a object from the created class using 'new' keyword
/*
class Bearer {
  // code goes here
}
const mysteryBearer = new Bearer()
console.log(mysteryBearer)
*/
 
// NOTE ON THE FIX:
// The original file redeclared `class Bearer { ... }` (and reused const names
// like roger/ace/luffy) many times at the top level of the same module.
// In JS, `class` and `const` are block-scoped but NOT allowed to be
// redeclared in the SAME scope — and a whole file's top-level code shares
// one scope. That's what threw:
//   SyntaxError: Identifier 'Bearer' has already been declared
// The fix: wrap each stage in its own `{ ... }` block. A `{}` block creates
// a fresh scope, so `class Bearer` and `const roger` can be reused safely
// in the next block without colliding. All the original code/comments are
// kept — just scoped.
 
{
  // Stage 1: basic constructor, watching `this` fire before properties exist
  class Bearer {
    constructor(firstName, epithet) {
      console.log(this) // watch this fire before the properties even exist
      this.firstName = firstName
      this.epithet = epithet
    }
  }
  //the constructor is a built-in function that runs automatically when a new object is created from the class. 
  // It is used to initialize the properties of the object.
  const noConstructorArgs = new Bearer()
  console.log(noConstructorArgs)
 
  const roger = new Bearer('Gol D. Roger', 'Pirate King')
  const ace = new Bearer('Portgas D. Ace', 'Fire Fist')
  const luffy = new Bearer('Monkey D. Luffy', 'Straw Hat')
 
  console.log(roger)
  console.log(ace)
  console.log(luffy)
}
 
{
  // Stage 2: more properties (era, bounty, crew)
  class Bearer1 {
    constructor(firstName, epithet, era, bounty, crew) {
      this.firstName = firstName
      this.epithet = epithet
      this.era = era
      this.bounty = bounty
      this.crew = crew
    }
  }
 
  const roger1 = new Bearer1(
    'Gol D. Roger',
    'Pirate King',
    'Golden Age',
    5564800000,
    'Roger Pirates'
  )
  console.log(roger1)
}
 
{
  //Default values with constructors:Constructor parameters can have defaults, just like regular functions — useful when a bearer's info is unknown
  class Bearer {
    constructor(
      firstName = 'Unknown D.',
      epithet = 'Nameless Rebel',
      era = 'Void Century',
      bounty = 0,
      crew = 'None'
    ) {
      this.firstName = firstName
      this.epithet = epithet
      this.era = era
      this.bounty = bounty
      this.crew = crew
    }
  }
 
  const mystery = new Bearer() // takes all defaults
  const luffy = new Bearer(
      'Monkey D. Luffy',
      'Straw Hat',
      'New Era',
      3000000000,
      'Straw Hat Pirates')
  console.log(mystery)
  console.log(luffy)
}
 
{
  //Class methods: functions that exist with the class and can be called on the object
  class Bearer {
    constructor(firstName, epithet, era, bounty, crew) {
      this.firstName = firstName
      this.epithet = epithet
      this.era = era
      this.bounty = bounty
      this.crew = crew
    }
    introduce() {
      return `I am ${this.firstName}, known as "${this.epithet}."`
    }
  }
 
  const roger = new Bearer('Gol D. Roger', 'Pirate King', 'Golden Age', 5564800000, 'Roger Pirates')
  const ace = new Bearer('Portgas D. Ace', 'Fire Fist', 'New World Era', 550000000, 'Whitebeard Pirates')
 
  console.log(roger.introduce())
  console.log(ace.introduce())
}
 
{
  //Properties with initial values: properties can be initialized with a value, and then changed later
  class Bearer {
    constructor(firstName, epithet, era, bounty, crew) {
      this.firstName = firstName
      this.epithet = epithet
      this.era = era
      this.bounty = bounty
      this.crew = crew
      this.hasSmiledAtDeath = false // starts false for everyone
      this.allies = [] // starts empty for everyone
    }
    introduce() {
      return `I am ${this.firstName}, known as "${this.epithet}."`
    }
  }
 
  const luffy = new Bearer(
      'Monkey D. Luffy',
      'Straw Hat', 
      'New Era', 
      3000000000, 
      'Straw Hat Pirates')
 
  console.log(luffy.hasSmiledAtDeath) // false
  console.log(luffy.allies) // []
}
 
{
  //Getters and setters: special methods that allow us to get and set properties of an object
  class Bearer {
    constructor(firstName, epithet, era, bounty, crew) {
      this.firstName = firstName
      this.epithet = epithet
      this.era = era
      this.bounty = bounty
      this.crew = crew
      this.hasSmiledAtDeath = false
      this.allies = []
    }
    introduce() {
      return `I am ${this.firstName}, known as "${this.epithet}."`
    }
    get allyCount() {
      return this.allies.length
    }
    get isRebel() {
      return this.bounty > 100000000 // arbitrary "rebel enough" threshold
    }
  }
  const ace = new Bearer('Portgas D. Ace', 'Fire Fist', 'New World Era', 550000000, 'Whitebeard Pirates')
  console.log(ace.allyCount) // no parentheses!
  console.log(ace.isRebel)
}
 
{
  //setters
  class Bearer {
    constructor(firstName, epithet, era, bounty, crew) {
      this.firstName = firstName
      this.epithet = epithet
      this.era = era
      this.bounty = bounty
      this.crew = crew
      this.hasSmiledAtDeath = false
      this.allies = []
    }
    introduce() {
      return `I am ${this.firstName}, known as "${this.epithet}."`
    }
    get allyCount() {
      return this.allies.length
    }
    get isRebel() {
      return this.bounty > 100000000
    }
    set raiseBounty(amount) {
      this.bounty += amount
    }
    set recruitAlly(name) {
      this.allies.push(name)
    }
  }
 
  const luffy = new Bearer('Monkey D. Luffy', 'Straw Hat', 'New Era', 300000000, 'Straw Hat Pirates')
 
  luffy.raiseBounty = 1500000000
  luffy.recruitAlly = 'Roronoa Zoro'
  luffy.recruitAlly = 'Nico Robin'
  luffy.recruitAlly = 'Trafalgar D. Water Law'
 
  console.log(luffy.bounty)
  console.log(luffy.allies)
  console.log(luffy.allyCount)
}
 
{
  //static methods
  class Bearer {
    constructor(firstName, epithet, era, bounty, crew) {
      this.firstName = firstName
      this.epithet = epithet
      this.era = era
      this.bounty = bounty
      this.crew = crew
      this.hasSmiledAtDeath = false
      this.allies = []
    }
    introduce() {
      return `I am ${this.firstName}, known as "${this.epithet}."`
    }
    get allyCount() {
      return this.allies.length
    }
    get isRebel() {
      return this.bounty > 100000000
    }
    set raiseBounty(amount) {
      this.bounty += amount
    }
    set recruitAlly(name) {
      this.allies.push(name)
    }
    dossier() {
      const allyList =
        this.allies.length > 0
          ? `Allies: ${this.allies.join(', ')}.`
          : 'No known allies.'
      return `${this.firstName} ("${this.epithet}") — bounty ${this.bounty}, crew ${this.crew}. ${allyList}`
    }
    static isBearerOfD(fullName) {
      return fullName.includes(' D. ')
    }
    static randomWorldGovernmentFear() {
      const fears = [
        'Ancient Weapons',
        'The Void Century',
        'Joy Boy\'s Return',
        'One Piece Itself',
        'The Will of D.',
      ]
      const index = Math.floor(Math.random() * fears.length)
      return fears[index]
    }
  }
 
  console.log(Bearer.isBearerOfD('Monkey D. Luffy'))
  console.log(Bearer.isBearerOfD('Smoker'))
  console.log(Bearer.randomWorldGovernmentFear())
}
 
{
  // Final stage: Inheritance + Overriding
  // These both need to extend the SAME Bearer, so they live together in one block.
 
  //Inheritance: allows us to create a new class that is based on an existing class, and can inherit properties and methods from the parent class
  class Bearer {
    constructor(firstName, epithet, era, bounty, crew) {
      this.firstName = firstName
      this.epithet = epithet
      this.era = era
      this.bounty = bounty
      this.crew = crew
      this.hasSmiledAtDeath = false
      this.allies = []
    }
    introduce() {
      return `I am ${this.firstName}, known as "${this.epithet}."`
    }
    get allyCount() {
      return this.allies.length
    }
    get isRebel() {
      return this.bounty > 100000000
    }
    set raiseBounty(amount) {
      this.bounty += amount
    }
    set recruitAlly(name) {
      this.allies.push(name)
    }
    dossier() {
      const allyList =
        this.allies.length > 0
          ? `Allies: ${this.allies.join(', ')}.`
          : 'No known allies.'
      return `${this.firstName} ("${this.epithet}") — bounty ${this.bounty}, crew ${this.crew}. ${allyList}`
    }
    static isBearerOfD(fullName) {
      return fullName.includes(' D. ')
    }
  }
 
  class Emperor extends Bearer {
    declareDominance() {
      console.log(`${this.firstName} rules a stretch of the New World.`)
    }
  }
 
  const blackbeard = new Emperor(
    'Marshall D. Teach',
    'Blackbeard',
    'New Era',
    3996000000,
    'Blackbeard Pirates'
  )
 
  console.log(blackbeard)
  console.log(blackbeard.declareDominance())
  console.log(blackbeard.introduce()) // inherited from Bearer
  console.log(blackbeard.dossier()) // inherited from Bearer
 
  //Overriding methods: allows us to create a new method in the child class that has the same name as a method in the parent class, and can be used to change the behavior of the method in the child class
  class Revolutionary extends Bearer {
    constructor(firstName, epithet, era, bounty, crew, motto) {
      super(firstName, epithet, era, bounty, crew) // run Bearer's constructor first
      this.motto = motto
    }
    dossier() {
      const allyList =
        this.allies.length > 0
          ? `Allies: ${this.allies.join(', ')}.`
          : 'No known allies.'
      return `${this.firstName} ("${this.epithet}") leads a rebellion under the World Government's nose. Motto: "${this.motto}." ${allyList}`
    }
  }
 
  const dragon = new Revolutionary(
    'Monkey D. Dragon',
    'The Revolutionary',
    'New Era',
    0, // no official bounty on record
    'Revolutionary Army',
    'Freedom for every nation.'
  )
 
  dragon.recruitAlly = 'Sabo' // setter is inherited too
 
  console.log(dragon.introduce()) // inherited, unchanged
  console.log(dragon.dossier()) // overridden version runs
}
 
