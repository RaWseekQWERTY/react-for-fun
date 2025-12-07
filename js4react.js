
function greetings(name) {
    console.log(`Hello, ${name}!`);
  }
  
greetings('John'); // Hello, John!
//The arrow function syntax allows you to create a function expression that produces the same result as the code above.
const greetings = name => {
    console.log(`Hello, ${name}!`);
  };
  
greetings('John'); // Hello, John!

const myArray = [1, 2, 3];

// From this:
myArray.forEach(function (item) {
  console.log(item);
});

// To this:
myArray.forEach(item => console.log(item));
//Arrow Functions Don’t Have this Binding
const person = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills() {
      this.skills.forEach(function (skill) {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person.showSkills();
  //undefined is skilled in HTML
//undefined is skilled in CSS
//undefined is skilled in JavaScript

const person2 = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills() {
      this.skills.forEach(skill => {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person2.showSkills();
  /*Nathan is skilled in HTML
Nathan is skilled in CSS
Nathan is skilled in JavaScript */

//One of these situations is when you define an object method. Back to our person object example above, 
//suppose you write the showSkills() method as an arrow function like this:
const person3 = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills: () => {
      this.skills.forEach(skill => {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person3.showSkills();
  //TypeError: Cannot read properties of undefined (reading 'forEach')
  //When you declare an object method using the arrow function, the this keyword refers to the global object, 
  //and the skills property is undefined there. Never use the arrow function when declaring a method.


   let age = 10
   let name = age>10 ? "pedro" : "juan";


   const dicperson = {
    name: 'Carlos',
    age: 25,
    city: 'Madrid'
   }
   
   const perName = dicperson.name

   const per2 = {...dicperson, country: 'Spain'}; // same as dicperson but changing country property
   
   const names = ["Pedro", "Juan", "Maria"];

   const names2 = [...names, "Luis"]; // same as names but adding "Luis" at the end