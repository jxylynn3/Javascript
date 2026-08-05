/*
day-14.js

//adding metadata
@Day: Day 14
@Date: 2026-08-05
@Title: Error Handling in JavaScript
@Topics: try, catch, throw, finally
@Color: #960677
 
*/
//JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

/*
try: wrap suspicious code that may throw an error in try block.
    The try statement allows us to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs. 
    The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

finally: finally block will always be executed regardless of the occurrence of an error.
     The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

throw: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object.
     Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception.
*/
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
}//ReferenceError: fistName is not defined at <anonymous>:4:20

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed')
}
//ReferenceError: fistName is not defined at <anonymous>:4:20
//In any case it  will be executed

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}
//Name of the error ReferenceError
//Error message fistName is not defined
//In any case I will be executed

//ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
//SyntaxError: A syntax error has occurred