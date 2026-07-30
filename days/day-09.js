/*
day-09.js

//adding metadata
@Day: Day 9
@Date: 2026-07-29
@Title: Everything you need to know about Higher Order Functions
@Topics: CallBacks, Functional Programming and Basic Sorting
@Color: #0a4dab
*/

//1. Callback()
// A callback is a function passed as an argument to another function.
// The higher-order function decides when or how to execute the callback.
const rinTrains = (task) => {
    return task.toUpperCase()
}

function jiangLesson(callback, lesson) {
    return callback(lesson)
}

console.log(jiangLesson(rinTrains, "meditate"))

//2. map()
const students = ["Fang Runin", "Chen Kitay", "Yin Nezha"]

// map() creates a NEW array.
// The callback runs once for every element.
// The original array is not modified.
const promotedStudents = students.map(student => `${student} (Elite Student)`)

console.log(promotedStudents)

//3. filter()
const cikeMembers = [
    { name: "Fang Runin", shaman: true },
    { name: "Chen Kitay", shaman: false },
    { name: "Altan Trengsin", shaman: true },
    { name: "Ramsa", shaman: true }
]

// filter() returns a NEW array.
// Only elements that satisfy the condition are kept.
// Elements that return false are excluded.
const shamans = cikeMembers.filter(member => member.shaman)

console.log(shamans)

//4. reduce()
const armyStrength = [1500, 2300, 1800, 1200]

// reduce() combines all elements into a single value.
// The accumulator stores the running result.
// The second argument (0) is the initial value.
const totalStrength = armyStrength.reduce((total, current) => {
    return total + current
}, 0)

console.log(totalStrength)

//5. find()
const gods = [
    { name: "Altan Trengsin", affinity: "Phoenix" },
    { name: "Chaghan Suren", affinity: "Crow" },
    { name: "Baji", affinity: "Pig" },
    { name: "Unegen", affinity: "Fox" }
]

// find() returns the FIRST element that satisfies the condition.
// If no element matches, it returns undefined.
const phoenixUser = gods.find(member => member.affinity === "Phoenix")

console.log(phoenixUser)

//6. Returning Function
// A higher-order function can return another function.
// Each returned function remembers the variables from its outer function.
// This is known as a closure.
function trainStudent(master) {
    return function(student) {
        return function(level) {
            return `${master} trained ${student} to level ${level}.`
        }
    }
}

console.log(trainStudent("Master Jiang")("Fang Runin")("Master"))

//7. setInterval()
// setInterval() repeatedly executes a callback function.
// The callback runs every specified number of milliseconds.
// 1000 milliseconds = 1 second.
function meditate() {
    console.log("Fang Runin is meditating...")
}

// Uncomment to test
// setInterval(meditate, 1000)

//8. setTimeout()
// setTimeout() executes a callback function only once.
// The callback waits for the specified number of milliseconds.
function phoenixAppears() {
    console.log("The Phoenix answers Fang Runin.")
}

// Uncomment to test
// setTimeout(phoenixAppears, 3000)

//9. every()
const cikeStatus = [
    { name: "Fang Runin", alive: true },
    { name: "Chen Kitay", alive: true },
    { name: "Yin Nezha", alive: true },
    { name: "Altan Trengsin", alive: true }
]

// every() checks whether EVERY element satisfies the condition.
// It returns true only if all callback results are true.
const everyoneAlive = cikeStatus.every(member => member.alive)

console.log(everyoneAlive)

//10. some()
const sinegardStudents = [
    { name: "Chen Kitay", shaman: false },
    { name: "Fang Runin", shaman: true },
    { name: "Yin Nezha", shaman: false },
    { name: "Altan Trengsin", shaman: true }
]

// some() checks whether AT LEAST ONE element satisfies the condition.
// It returns true immediately after finding the first match.
const hasShaman = sinegardStudents.some(member => member.shaman)

console.log(hasShaman)

//11. findIndex()
const academyStudents = [
    "Chen Kitay",
    "Fang Runin",
    "Yin Nezha",
    "Altan Trengsin"
]

// findIndex() returns the index of the first element
// that satisfies the condition.
// If no match is found, it returns -1.
const index = academyStudents.findIndex(student => student === "Yin Nezha")

console.log(index)

//12. sort() Strings
const generals = [
    "Altan Trengsin",
    "Fang Runin",
    "Chen Kitay",
    "Yin Nezha",
    "Chaghan Suren"
]

// sort() sorts strings alphabetically by default.
// The original array is modified.
generals.sort()

console.log(generals)

//13. sort() Numbers
const battleScores = [
    95,
    12,
    100,
    67
]

// sort() treats numbers as strings by default,
// which produces incorrect numerical ordering.
console.log(battleScores.sort())

// To correctly sort numbers,
// provide a compare function.
battleScores.sort((a, b) => a - b)

console.log(battleScores)

// Descending order
battleScores.sort((a, b) => b - a)

console.log(battleScores)

//14. sort() Objects
const warriors = [
    { name: "Fang Runin", rank: 2 },
    { name: "Altan Trengsin", rank: 1 },
    { name: "Chen Kitay", rank: 4 },
    { name: "Yin Nezha", rank: 3 },
    { name: "Chaghan Suren", rank: 5 }
]

// When sorting objects,
// compare one of the object's properties.
warriors.sort((a, b) => a.rank - b.rank)

console.log(warriors)

// Sort objects in descending order
warriors.sort((a, b) => b.rank - a.rank)

console.log(warriors)