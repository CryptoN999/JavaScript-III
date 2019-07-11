/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: The value of this, will be the window/console Object when in the global scope.
* 2. Implicit Binding: If a function is called by a preceding dot, the object before the dot is this.
* 3. New binding: If a constructor function is used, then this refers to a specific instance of the object that is created and returned by said function.
* 4. Explicit binding: the apply or call method is used, then this is explicity defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
//var myFunction = function() {
//    console.log(this);
// }
 
// myFunction();
// Principle 2

// code example for Implicit Binding
//const myObj = {
//    greeting: 'Hello',
//    sayHello: function(name) {
//      console.log(`${this.greeting} my name is ${name}`);
//      console.log(this);
//    }
//  };
//  myObj.sayHello('Nicholas');
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
     console.log(this);
    };
  }
  
  const Nicholas = new CordialPerson('Chris');
  const Chris = new CordialPerson('Nicholas');
  
  Nicholas.speak();
  Chris.speak();
// Principle 4

// code example for Explicit Binding
Nicholas.speak.call(Chris);