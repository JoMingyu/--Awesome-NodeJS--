function sum(a, b) {
    return a + b;
}
// 함수는 function이라는 키워드로 선언하고, 반환은 있을 수도 있고 없을 수도 있다
// 반환이 명시되지 않은 함수는, 반환값이 undefined로 처리된다

console.log(sum(1, 3));
// 4
console.log(sum());
// NaN
// 전달하지 않은 인자는, 기본값이 없더라도 오류가 발생하지 않고 undefined로 처리되며
// 위의 경우 undefined + undefined가 되어 NaN이 반환된다

function sum(a=0, b=0) {
    // 매개변수에 기본값 정의 가능
    return a + b;
}

console.log(sum());
// 0
console.log(sum(b=3));
// 3
// 인자를 지정하여 값 전달 가능