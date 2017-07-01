function plus(x, y) {
  return x + y;
}

function plus2(x = 0, y = 0) {
  // 기본 파라미터 초기값
  return x + y;
}

console.log(plus()); // Nan
console.log(plus2()); // 0

function rest(...param) {
  // Rest 파라미터
  console.log(param);
}

rest(1, 2, 3, 4);
