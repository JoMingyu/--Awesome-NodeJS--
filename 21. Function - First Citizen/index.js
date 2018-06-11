function s(a, b) {
    return a + b
}
// JavaScript에서 함수는 일급 객체기 때문에 값으로 분류할 수 있으며, 따라서 변수에 할당하고, 함수에 전달하고, 리턴값이 될 수 있다

var sum = s;
// 변수에 할당

console.log(sum(1, 3));
// 4

function calculator(func, a, b) {
    return func(a, b);
}

console.log(calculator(sum, 1, 3));
// 4