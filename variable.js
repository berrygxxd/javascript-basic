// 1. Use strict
// added in ES 5
// use this for Vanilla JavaScript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name'; {
  let name = 'berry';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// 글로벌 변수들은 어플리케이션이 시작할 때부터 끌날 때까지 
// 항상 메모리에 탑재되어 있기 때문에, 최소한으로 쓰는 것이 좋다.
// 가능하면 필요한 부분에서만 정의해서 쓰도록 하자.

// var (don't ever use this!)
// var hoisting 
// 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올림.
{
  age = 4;
  var age;
}
console.log(age);
// 블록 스코프를 철저히 무시함.


// number = 4;
// let number;
// let을 선언하기도 전에 값을 넣었다는 에러가 발생.

// 3. Contant, r(read only)
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistake
const dayInWeek = 7;
const maxNumber = 5;

// 정리❣
// 자바스크립트에서는 변수를 선언할 때, 
// Mutable 타입의 let
// Imutable 타입의 const
// 2가지가 있다.

// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mmutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// reduce human mistakes

// 4. Variable types
// Primitive, single item: number, string, boolearn, null, undefiedn, symbol 
// object, box container
// function, first-class function

const count = 17; // integer (정수)
const size = 17.1; // decimal number (소수)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// 값에 상관없이 타입은 number

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, underfined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// 똑같은 symbol을 만들고 싶은 경우
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// object, real-life object, data structure
const berry = { name: 'berry', age: 25 };
berry.age = 26; 

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); 

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // 에러 발생

// Dynamic typing으로 인해 TypeScript가 나오게 됨
// TypeScript는 JavaScript 위에 type이 올려진 언어