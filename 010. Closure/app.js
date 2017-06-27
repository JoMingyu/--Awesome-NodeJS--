function outer() {
  var v = 'Hello';

  return function() {
    console.log(v);
  }
}

var func = outer();
// 함수가 호출되고 나서도 outer() 함수의 지역변수가 소멸되지 않음
// 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않음
// 이걸 클로저라고 한다

func();
