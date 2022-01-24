// 포기하지마🙏

'use strict';

// 함수 선언
function doSomthing() {
  console.log('hello');
}

// 값을 리턴하는 함수
function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수를 인자로 전달
function doSomthing2(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

// 함수 호출
doSomthing();

const result = add(1, 2);
console.log(result);

doSomthing2(add);

// 함수를 변수에 할당
const addFun = add;
console.log(add);
const result2 = addFun(3, 4);
console.log(result2);
