function calculator(a, b, func) {
  return func(a, b);
}

var module = require('./module.js');

console.log(calculator(2, 3, module.plus));
console.log(calculator(10, 3, module.minus)); // Function as a value
console.log(module.plusAll(2, 3, 4, 5, 6)); // Use arguments

function sum(a, b, func) {
  var sum = a + b;
  func('Result is ' + sum); // Back
}

sum(3, 5, function(result) { // Call
  console.log(result);
});

var memo = new module.Memo('Hello'); // 객체 생성
console.log(memo.show());

function EnhancedMemo(msg) {} // 새로운 생성자
EnhancedMemo.prototype = new module.Memo(); // Prototype을 이용한 상속

var enhancedMemo = new EnhancedMemo('Hello');
console.log(memo.show());
