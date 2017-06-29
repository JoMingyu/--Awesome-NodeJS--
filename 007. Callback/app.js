function caller(func) {
  // 전달된 함수가 특정한 시점에 다시 호출되는 것
  func(3);
}

caller(function(a) {
  console.log(a);
});
