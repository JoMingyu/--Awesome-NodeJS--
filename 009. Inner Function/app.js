function outer() {
  var v = 'Hello';
  function inner() {
    // var v = 'Hello';
    console.log(v); // 외부함수의 지역변수에 접근
  }

  inner();
}

outer();
