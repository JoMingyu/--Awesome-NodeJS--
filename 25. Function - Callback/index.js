// JavaScript가 비동기 처리를 할 수 있도록 만드는 개념인 callback
// 함수의 매개변수로 함수를 전달할 수 있으니,
// 1. 함수 A에 함수 B를 전달하고
// 2. 함수 A의 처리가 끝나면, 함수 B에 그 결과를 전달
// 함수 A를 call한 후, 함수 B에게 제어가 돌아오기(back) 때문에 이를 callback이라고 부른다
function sum(printerFunction, a, b) {
    printerFunction(a + b);
}

sum(function(res) {
    console.log(`Result is ${res}`);
}, 1, 3);
// sum 함수에 인자 res를 받아 출력하는 익명 함수를 전달하고, a와 b 자리에 차례로 1과 3을 전달

// -> 함수 A의 처리가 끝날 때까지 대기(Blocking)하지 않고, 함수를 호출한 후에 다른 작업을 처리하다가
// 함수 A의 처리가 끝날 때 제어를 넘겨 콜백 함수에서 로직을 수행(Non-Blocking)하는 형태의 프로그래밍이 가능해진다