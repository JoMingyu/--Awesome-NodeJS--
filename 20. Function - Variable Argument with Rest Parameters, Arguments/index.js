function f(a, b, ...args) {
    console.log(a, b, args);
}
// 함수의 마지막 유명(named) 인수가 '...'로 시작되는 경우,
// 해당 함수에 전달되는 나머지 인자들을 모두 수집하여 배열로 형성

// ---

// arguments는 모든 함수 내에서 이용 가능한 지역변수인데, 함수에 전달된 각 인자를 위한 항목을 포함하고 있다
function f(a, b) {
    console.log(a, b);
    console.log(arguments);
    console.log(arguments[0]);
}

f(1, 3);
// 1 3
// { '0': 1, '1': 3 }
// 1
// 타입이 Array와 비슷하지만, length를 제외하고는 Array와 겹치는 속성이 없다