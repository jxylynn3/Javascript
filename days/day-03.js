/*
day-03.js


//adding metadata
@Day: Day 3
@Date: 2026-07-21
@Title: Intro to using boolean, null, undefined, and symbol data types
@Topics: Boolean ,Null , Window Methods , Date Object
@Color: #fae716
 
*/
//learning by making a mini game
//A: date Object
const now = new Date()
const day = now.getDate()
const month = now.getMonth() + 2 //months are zero based, incresing the '+' to get to month
const year = now.getFullYear()

//time obj
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds() 

console.log("\n Adventure Started!!")
//print date + time
console.log(`\nDate: ${day}/${month}/${year} \nTime: ${hours}:${minutes}:${seconds}`)
//B: Operators and Boolean
//defining var using Operators
let playerHealth = 100
let playerGold = 30
let playerAttack = 10
let monstersKilled = 0
let roomsExplored = 0

//define game var using Booleans,undefined & null
let playerAlive = true
let monsterAlive = true
let weapon= null
let EpicMagicScoll

console.log("\n PLAYER STATS: \nHealth: " + playerHealth + "\nAttack: " + playerAttack + "\nGold: " + playerGold )

//Room 01
console.log ("ROOM 01:")
roomsExplored++
let monsterAppeared = true
if (monsterAppeared && playerAlive) {
    console.log("A wild monster has appeared!")
    let damage = playerAttack + 2
    console.log("Attack")
    console.log("Damage dealt: " + damage)
    playerHealth -= 5
    monstersKilled++
    playerGold +=15

    console.log("Monster Defeated!");
    console.log("Gold +15");
    console.log("Health:", playerHealth);
}

//ROOM 02
console.log("ROOM 2");
roomsExplored++;

monsterAppeared = false;

if (!monsterAppeared) {

    console.log("Empty Room");

}
//ROOM 03
console.log("ROOM 3");
roomsExplored++;

let treasureFound = true;

if (treasureFound) {

    console.log("Treasure Chest!");
    playerGold += 25;
    console.log("Gold +25");
}
//ROOM 4
console.log("ROOM 4");
roomsExplored++;
monsterAppeared = true;

if (monsterAppeared) {

    console.log("Monster Appeared!");
    let criticalHit = true;
    let damage;

    if (criticalHit) {
        damage = playerAttack + 10;
        console.log("Critical Hit!");

    } else {
        damage = playerAttack;
    }

    console.log("Damage:", damage);
    playerHealth -= 33;
    monstersKilled++;
    playerGold += 40;
    console.log("Monster Defeated!");
    console.log("Gold +40");
    console.log("Health:", playerHealth);

}


console.log("\n Comparison Operators");
console.log("Health > 0 :", playerHealth > 0);
console.log("Gold >= 100 :", playerGold >= 100);
console.log("Attack == 15 :", playerAttack == 15);
console.log("Attack === 15 :", playerAttack === 15);
console.log("Gold != 0 :", playerGold != 0);
console.log("Health <= 50 :", playerHealth <= 50);


//using logical operators to check multiple conditions
console.log("\n Logical operators");
console.log(playerHealth > 50 && playerGold > 50);
console.log(playerHealth < 20 || playerGold > 100);
console.log(!monsterAppeared);

//using Increment to simulate finding a potion ingame
console.log("\nINCREMENT")
let potions = 2
console.log("Potions:", potions)
potions++;
console.log("After Finding Potion:", potions)

// using Decrement to simulate using a potion ingame
console.log("\n DECREMENT")
potions--;
console.log("Potion Used:", potions)

// TRUTHY / FALSY
console.log("\nTRUTHY / FALSY")
let chest = ""
if (chest) {
    console.log("Chest has treasure")
} else {
    console.log("Chest is empty")
}


// TERNARY OPERATOR

console.log("\n PLAYER STATUS")

playerAlive = playerHealth > 0
playerAlive
    ? console.log("Player Survived!")
    : console.log("Game Over")


// TYPEOF
let summary = "\n DATA TYPES" +"\n Health: " + typeof playerHealth + "\n Gold: " + typeof playerGold + "\n Alive: " + typeof playerAlive + "\n Weapon: " + typeof weapon + "\n Magic Scroll: " + typeof EpicMagicScroll
//alert(summary)
console.log(summary)