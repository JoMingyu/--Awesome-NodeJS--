// Logical Operator(논리 연산자)는 Boolean 타입의 피연산자들을 통해 논리 연산을 수행한 후 Boolean value를 반환한다
// &&(and)와 ||(or) 연산자는 단순히 boolean을 반환하는 것이 아니라, 피연산자 중 특정한 피연산자를 그대로 반환하도록 설계되어 있다
// 따라서 boolean이 아닌 값과 논리 연산자를 함께 사용하면, 피연산자를 그대로 리턴하게 된다

// JS의 모든 객체에는 참과 거짓이 존재한다
// -> 빈 문자열, null, undefined, 0, NaN은 거짓 / 나머지는 참

console.log(3 && 8);
// 8
// expr1 && expr2
// expr1이 false로 평가되면 expr1을 반환하고, 그렇지 않으면 expr2를 반환
console.log(0 && 8);
// 0
console.log(false && '');
// false

console.log(3 || 8);
// 3
// expr1 || expr2
// expr1이 true로 평가되면 expr1을 반환하고, 그렇지 않으면 expr2를 반환
console.log(0 || 8);
// 8
console.log(false || '');
// ''

console.log(!3);
// false
// !expr
// expr이 true로 평가되면 false를 반환하고, 그렇지 않으면 true를 반환
