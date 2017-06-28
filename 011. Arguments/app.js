function sum() {
  // 인자에 대한 정의가 없지만 마지막 라인에서는 3개의 인자를 전달하고 있음
  // 함수 안에서 사용할 수 있도록 그 이름이나 특성이 약속되어 있는 일종의 배열
  // 실제로는 arguments 객체의 인스턴스
  var sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

function lengthExample(a, b) {
  return {
    'func_length' : lengthExample.length,
    'args_length' : arguments.length
  };
}

console.log(sum(1, 2, 3));

var len = lengthExample(2, 3, 4, 5);
console.log(len.func_length);
console.log(len.args_length);
