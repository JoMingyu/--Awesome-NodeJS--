// 일반적인 언어에서 함수는 statement로만(선언형으로만) 사용할 수 있는데, JavaScript에서 함수는 expression(식)이 될 수 있다
var sum = function(a, b) {
    return a + b;
}

// JavaScript의 함수는 일급 함수기도 해서, 익명 생성과 런타임 생성이 가능하다
function calculator(func, a, b) {
    return func(a, b);
}

console.log(calculator(function(a, b) { return a + b }, 1, 3));
// 4
// 두 매개변수를 받아 합을 반환하는 함수를 런타임에 익명으로 생성
