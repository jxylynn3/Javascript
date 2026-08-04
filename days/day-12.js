/*
day-12.js

//adding metadata
@Day: Day 12
@Date: 2026-08-02
@Title: Everything you need to know about regular expressions
@Topics: Patterns,Groups Flags,Quantifiers,Anchors,Character Sets and Ranges
@Color: #4b034e
*/
//A regular expression [RegExp] is a programming sub-set of lang. that ise used to find patterns in data
//A regExp takes 2 parameters, 1. the required search pattern 2.an optional flag
//Pattern: is a text which has some sort of similarity to the text you are searching for
//Flag: are the optional parameters that are used to determined the type of searching

//A.
//creating a pattern with RegExp constructor

//1. Declaring regular expression without global flag and case insensitive flag.
// without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

//2.Declaring regular expression with global flag and case insensitive flag.
let pattern1 = 'love'
let flag = 'gi'
let regEx1 = new RegExp(pattern1, flag)

//3.Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor
let regEx = new RegExp('love','gi')

//Creating a pattern without RegExp Constructor
//1.Declaring regular expression with global flag and case insensitive flag.
let regEx= /love/gi

//2. The above regular expression is the same as the one which we created with RegExp constructor
let regEx= new RegExp('love','gi')

//example of how to create a pattern using RegExp constructor and without RegExp constructor
// A lock built as a literal — the / / are the lock's casing
const lock = /secret/
// Same lock, built from a string instead
const lockFromString = new RegExp('secret')
console.log(lock)           // /secret/
console.log(lockFromString) // /secret/

//B.
//test() uses bool to determine if the lock opens
const message = 'the password is secret'
const lock = /secret/
console.log(lock.test(message)) // true
const decoyMessage = 'the password is classified'
console.log(lock.test(decoyMessage)) // false

//C.

//match() :Returns an array containing all of the matches, including capturing groups, or null if no match is found.
// If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)

// Find the hidden numeric code inside the message
const transmission = 'agent 47 reporting, code 47 confirmed'
const codeLock = /47/
console.log(transmission.match(codeLock))// ['47', index: 6, input: '...', groups: undefined]
console.log(transmission.match(/47/g))// ['47', '47']  ///g for global

//search() ==> Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const str = 'I love JavaScript'
const pattern = /love/g
const result = str.search(pattern)
console.log(result)

//replace() ==>Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
const txt = 'Nightingale is the most trusted courier we have ever recruited.\
I recommend nightingale for the first border crossing'
matchReplaced = txt.replace(/Nightingale|nightingale/, 'Falconer')
console.log(matchReplaced)

// Intercepted transmission — someone scrambled it with a "%" noise cipher
// to throw off eavesdroppers. Strip every % and the real message surfaces.
const txt = '%T%h%e s%afe%hou%%s%e i%s c%%ompr%om%ised%. %M%ove t%o th%e ba%ckup \
lo%ca%tion a%t on%ce a%nd %% awa%it fur%ther in%struct%ions.\
%D%o n%ot us%e th%e us%ual ch%ann%el, i%t i%s be%ing mo%nito%red.\
%Con%firm r%ecei%pt wi%th th%e %%ph%rase "s%parr%ow ha%s la%nded".'
matches = txt.replace(/%/g, '')
console.log(matches)

// Redact every 4-digit code in the transmission
const transmission = 'agent 4471 meets agent 8823 at dawn'
const redacted = transmission.replace(/\d{4}/g, '[REDACTED]')
console.log(redacted)
// agent [REDACTED] meets agent [REDACTED] at dawn
// Swap the codename format from "agent-###" to "AGENT ###"
const raw = 'agent-001 and agent-002 reporting'
const relabelled = raw.replace(/agent-(\d+)/g, 'AGENT $1')
console.log(relabelled)
// AGENT 001 and AGENT 002 reporting


//D.
/*
Symbol	Cracks open...
.	any single character (except newline)
\d	any digit 0-9
\D	anything that is NOT a digit
\w	any word character (letters, digits, underscore)
\W	anything that is NOT a word character
\s	any whitespace
\S	anything that is NOT whitespace
*/
// Crack any message that has at least one digit hidden in it
const hasDigit = /\d/
console.log(hasDigit.test('agent47')) // true
console.log(hasDigit.test('agent'))   // false

// Crack a message made purely of word characters, no spaces
const wordLock = /^\w+$/
console.log(wordLock.test('classified')) // true
console.log(wordLock.test('top secret')) // false — space breaks it

//E. Anchors
/*
^	start of the message
$	end of the message
*/
// The cipher must START with 'agent'
const startsWithAgent = /^agent/
console.log(startsWithAgent.test('agent47 is active'))  // true
console.log(startsWithAgent.test('active: agent47'))    // false
// The cipher must END with 'confirmed'
const endsConfirmed = /confirmed$/
console.log(endsConfirmed.test('code 47 confirmed'))    // true
console.log(endsConfirmed.test('confirmed, standby'))   // false

//F.Quantifiers 
/*
*	0 or more
+	1 or more
?	0 or 1 (optional)
{n}	exactly n
{n,}	n or more
{n,m}	between n and m
*/
// Crack any message with 4 digits in a row (a 4-digit access code)
const fourDigitCode = /\d{4}/
console.log(fourDigitCode.test('vault code 9471 accepted')) // true
console.log(fourDigitCode.test('vault code 94 accepted'))   // false

// Optional 's' — catches both "agent" and "agents"
const agentOrAgents = /agents?/
console.log(agentOrAgents.test('agent on site'))  // true
console.log(agentOrAgents.test('agents on site')) // true

//G. Character Sets and Ranges — [...]
// Only vowels count as valid cipher characters here
const vowelLock = /[aeiou]/g
console.log('classified'.match(vowelLock)) // ['a', 'i', 'i', 'e']
// A range: any single lowercase letter a through f (a hex-style code)
const hexDigit = /[a-f]/
console.log(hexDigit.test('code: b4'))  // true
console.log(hexDigit.test('code: 99')) // false
// Negated set: anything that is NOT a digit
const notDigit = /[^0-9]/
console.log(notDigit.test('12345')) // false
console.log(notDigit.test('1234x')) // true


//G. Flags "How the lock behaves"
/*
g	global — find all matches, not just the first
i	case-insensitive — ignore upper/lowercase
m	multiline — ^ and $ match per line, not just whole string
*/
// Case doesn't matter when cracking this one
const caseless = /agent/i
console.log(caseless.test('AGENT 47 REPORTING')) // true
// Catch every instance, case-insensitively
const allAgents = /agent/gi
console.log('Agent A, agent B, AGENT C'.match(allAgents))// ['Agent', 'agent', 'AGENT']

//H.Groups (...)
//Parentheses group part of the pattern together, letting you extract just the piece you actually care about, or repeat a whole chunk at once.
// Crack a code shaped like "agent-###" and grab only the number
const codeFormat = /agent-(\d+)/
const result = 'agent-4471 confirmed'.match(codeFormat)

console.log(result[0]) // 'agent-4471'  — the full match
console.log(result[1])

