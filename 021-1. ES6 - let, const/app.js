// 자바스크립트의 변수는 Function-level scope를 가진다
// 함수 내에서 선언된 변수는 함수 내에서만 유효함
// C 계열 언어는 Block-level scope를 가지고 있다
function f() {
  var v = 123;
}
 // console.log(v);
 // 접근 불가 : Function-level scope

{
  var v = 123;
}
console.log(v);
// 접근 가능

// ES6에서 Block-level scope를 갖는 변수를 선언할 수 있도록 let 키워드 제공

{
  let vv = 123;
}
// console.log(vv);
// 접근 불가 : let = Block-level scope
// + let은 중복 선언 시 SyntaxError가 발생함

{
  const vvv = 123;
}
// console.log(vvv);
// 접근 불가 : const = Block-level scope
// + const는 선언과 동시에 초기화해야 함, 초기화 이후 재할당 금지
