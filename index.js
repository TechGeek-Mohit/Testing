// let name = 'Mosh';
//console.log(name);

//cannot be a reserved keyword
//should be meaningful
//Cannot start with number (1name)
//Cannot contain space or hyphen (-)
//Are case-sensitive

let firstName = 'Mosh';
let lastName = 'Hamedani';
const interestRate = 0.3;
//Cannot reassign values to const
//interestRate = 1;
console.log(interestRate);

/**
 * Varaibles
 * Primitive Types/ Refrence Types
 */
let myName = 'Mosh'; //string literal
// let age = 30; //Number Literal
let isApproved = false; // Boolean Literal
let hisName = undefined;
let selectedColor = null;
/**
 * Java script is dynamic
 * In static languages the type
 * of the static varaible does not change
 * 
 */

/**
 * Primitive/ Value Types
 * String, Number, Boolean, undefined, null
 * Refrence Types
 * Object, Array, Function
 */
let person = {
    name: 'Mosh', 
    age: 30
};
//Dot Notation
person.name = 'John'

//Bracket Notation
// console.log(person.name)


/**
 * Arrays
 */
let colors = ['red', 'blue']
colors[2] = 'green'
colors[3] = '1'
for(i = 0; i < colors.length; i ++ ){
    console.log(colors[i])
}
console.log("length: " + colors.length);

/**
 * functions in javascript
 */
name = 'Mohit'
//parameter
function greet(name, lastName){
    console.log('Hello '+ name + ' '+ lastName)
}
//argument
greet(name, 'Dash');
greet('Mary', 'Stevenson');

/**
 * Types of function
 */
function square(number){
    return number * number;
}
console.log(square(2))
