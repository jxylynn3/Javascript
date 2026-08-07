/*
day-16.js
 
//adding metadata
@Day: Day 16
@Date: 2026-08-06
@Title: Intro to JavaScript JSON
@Topics:JSON
@Color: #4f0931
 
*/

// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application as text.

// JSON is built on two structures:
// 1. A collection of name/value pairs (often called an object)
// 2. An ordered list of values (often called an array)
//JSON vs JavaScript Objects
//this is a JavaScript object
{
const louis = {
    name: "Louis de Pointe du Lac",
    age: 145,
    species: "Vampire"
}
console.log(louis.name);
}
/*
{
    "name": "Louis de Pointe du Lac",
    "age": 145,
    "species": "Vampire"
}
//JSON cand contain strings,numbers,booleans,arrays, objects, and nested objects
{
    "characters": [
        {
            "name": "Louis de Pointe du Lac",
            "species": "Vampire",
            "role": "Interview Subject"
        },
        {
            "name": "Lestat de Lioncourt",
            "species": "Vampire",
            "role": "Interview Subject"
        },
        {
            "name": "Claudia",
            "species": "Vampire",
            "role": "Interview Subject"
        },
        {
            "name": "Daniel Molloy",
            "species": "Human",
            "role": "Interviewer"
        }
    ]
}
*/
//suppose your server send the following:
const interviewText = `{
    "name": "Louis de Pointe du Lac",
    "species": "Vampire",
    "age": 145
}`
console.log(typeof interviewText);
//this has a declaration similar to objects, but is still an example of JSON

//JSON.parse()
{
const interviewText = `{
    "name": "Louis de Pointe du Lac",
    "species": "Vampire",
    "age": 145
}`
const louis = JSON.parse(interviewText);
console.log(louis.name);
}
/*
Imagine your vampire interview application requests data from a server.
The server responds with:
{
    "name": "Lestat de Lioncourt",
    "species": "Vampire",
    "personality": "Theatrical"
}
*/
//Your JavaScript receives it as JSON text.
//You then do:
const responseText = `{
    "name": "Lestat de Lioncourt",
    "species": "Vampire",
    "personality": "Theatrical"
}`
const lestat = JSON.parse(responseText)
console.log(lestat.personality)

//Nested JSON
{
const interviewText = `{
    "interview": {
        "interviewer": "Daniel Molloy",
        "subject": {
            "name": "Louis de Pointe du Lac",
            "species": "Vampire",
            "age": 145
        },
        "location": "Dubai"
    }
}`
const interview = JSON.parse(interviewText)
console.log(interview.interview.interviewer)
console.log(interview.interview.subject.name)
console.log(interview.interview.subject.species)
}

//Reviver function 
//A reviver lets you control how values are transformed while JSON is being converted into a JavaScript object.
{
const interviewText = `{
    "name": "Louis de Pointe du Lac",
    "species": "Vampire",
    "location": "Dubai"
}`

const interview = JSON.parse(interviewText, (key, value) => {
    if (key === "name") {
        return value.toUpperCase()
    }
    return value
})
console.log(interview)
}
//more examples
{
const interviewText = `{
    "name": "Louis de Pointe du Lac",
    "age": 145,
    "species": "Vampire"
}`
const interview = JSON.parse(interviewText, (key, value) => {
    if (key === "age" && typeof value === "number") {
        return `${value} years old`
    }
    return value
})
console.log(interview)
}
//Stringify
{
const interview = {
    interviewer: "Daniel Molloy",
    subject: "Armand",
    location: "Paris",
    year: 2022
}
const interviewJSON = JSON.stringify(interview);
}
//The replacer allows you to decide what information should be included.
{
JSON.stringify(object, replacer, space)
const louis = {
    name: "Louis de Pointe du Lac",
    species: "Vampire",
    age: 145,
    location: "New Orleans",
    occupation: "Businessman",
    bloodType: "Unknown",
    secrets: "Classified"
}
const publicProfile = JSON.stringify(
    louis,
    ["name", "species", "location"],
    4
)
console.log(publicProfile)
}