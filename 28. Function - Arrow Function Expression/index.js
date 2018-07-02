// 화살표 함수 표현(Arrow function expression)은 function 표현에 비해 구문이 짧고
// this, arguments, super, new.target을 바인딩하지 않음
// 화살표 함수는 항상 익명이며, 따라서 메소드가 아닌(객체에 대한 접근이 필요하지 않은) 함수에 적절

console.log(((a, b) => {
    return a + b
})(1, 3));
// 화살표 함수로 즉시 실행 함수 표현
// (params) => { statements }

console.log(((a, b) => a + b)(1, 3));
// 별도의 로직 없이 return만 있다면, (params) => expression으로 표현 가능
// 해당 구문은 (a, b) => { return a + b }와 동일

console.log((a => a)(3));
// 인자가 하나라면 인자 부분의 소괄호 생략 가능