const pow = x => x * x;
// Arrow function은 익명 함수로만 사용할 수 있다

console.log(pow(3));

function f(func) {
  func(3);
};

f(n => {
  // 콜백을 위한 익명 함수를 만들 때
  console.log(n);
});

// 나중에 다시 읽어보자
// http://poiemaweb.com/es6-arrow-function
