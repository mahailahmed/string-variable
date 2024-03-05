// Declare a string variable

let greeting: string = "Hello, TypeScript!"

// Print the string
console.log(greeting)                     //output is   (hello,typescript)

// Concatenate strings
let firstName: string = "John"
let lastName: string = "Doe"
let fullName: string = firstName + lastName
console.log( fullName)                        //output is    (john doe)

// String interpolation
let age: number = 25
let message: string = `My name is ${fullName} and I am ${age} years old.`;
console.log(message)                   //output is    (  My name is john deo and i am 25 year old  )
 