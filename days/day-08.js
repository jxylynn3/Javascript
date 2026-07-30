/*
day-08.js

//adding metadata
@Day: Day 8
@Date: 2026-07-29
@Title: Everything you need to know about Objects
@Topics: Objects, Scope
@Color: #0a83ab
*/

//A. Scope

//without using console.log() open with the browser [Window Global Object]
//in this example let or const are globa variables , that simulate shout in public
globalHouse = "Slytherin";
globalPoints = 500;

function dracoSpeaks() {
    console.log(globalHouse);
    console.log(globalPoints);
}
dracoSpeaks();

//whereas in this example the variable let are accessible by everyone
let house = "Slytherin";
let broom = "Nimbus 2001";

function showDracoInfo() {
    console.log(house);
    console.log(broom);
}

showDracoInfo();

console.log(house);

//in thisexample the let variable is accessible by the person (draco)
let huis = "Slytherin";

function showSecretSpell() {
    let secretSpell = "Sectumsempra";
    console.log(secretSpell);
}

showSecretSpell();

//creating an Object
const _draco = {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    age: 17
};

console.log(_draco);

//dot notation
console.log(_draco.firstName);
console.log(_draco.house);

//Bracket notation
console.log(_draco["house"]);

//brackets are required in situations as followed:
const dracoSpell = {
    "favorite spell": "Expelliarmus"
};

console.log(dracoSpell["favorite spell"]);


//Object methods
const dracoProfile = {
    firstName: "Draco",
    lastName: "Malfoy",

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(dracoProfile.getFullName());

//what is this?? ==> a keyword 'this' always refers to the object that called the method.


// Hermione Granger Object
const hermione = {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    age: 17,
    skills: ["Levitation", "Potion Making"],

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log("Original Object:");
console.log(hermione);


// 1. Adding NEW properties
hermione.pet = "Crookshanks";          // New key
hermione.title = "Brightest Witch";    // New key


// 2. Updating an existing property
hermione.house = "Head Girl"; // Changes Gryffindor to Head Girl


// 3. Adding items to an array inside the object
hermione.skills.push("Time-Turner Magic");
hermione.skills.push("Defence Against the Dark Arts");


// 4. Adding a new method
hermione.getInfo = function () {
    return `${this.getFullName()} is known as the ${this.title}. She knows ${this.skills.join(", ")}.`;
};

console.log("\nUpdated Object:");
console.log(hermione);

console.log("\nMethod Output:");
console.log(hermione.getInfo());


// 5. Copying the object
const copyHermione = Object.assign({}, hermione);

console.log("\nCopied Object:");
console.log(copyHermione);


// 6. Getting all the keys
console.log("\nObject.keys()");
console.log(Object.keys(copyHermione));


// 7. Getting all the values
console.log("\nObject.values()");
console.log(Object.values(copyHermione));


// 8. Getting keys and values together
console.log("\nObject.entries()");
console.log(Object.entries(copyHermione));


// 9. Checking if a property exists
console.log("\nHas 'pet'?");
console.log(copyHermione.hasOwnProperty("pet")); // true

console.log("\nHas 'wandType'?");
console.log(copyHermione.hasOwnProperty("wandType")); // false