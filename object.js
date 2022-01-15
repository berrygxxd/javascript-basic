'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of releted data and/or functionality.
// Nearly all objects in JavaScript are instance of Object


// 1. Literals and properties
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const berry = { name: 'berry', age: 4 }; 
print(berry);

// with  JavaScript magic (dynamically typed language)
// can add properties later
berry.hasJob = true;
console.log(berry.hasJob);

delete berry.hasJob;
console.log(berry.hasJob);

// 2. Computed properties
// key should be always string
console.log(berry.name);
console.log(berry['name']);
berry['hasJob'] = true;
console.log(berry.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(berry, 'name');
printValue(berry, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('berry', 5);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in berry);
console.log('age' in berry);
console.log('random' in berry);
console.log(berry.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in berry) {
  console.log(key);
}

// for (value of iterable)
// const array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'berry', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);