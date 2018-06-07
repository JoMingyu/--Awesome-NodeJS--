// 동등 연산
console.log(1 == 1);
// true
console.log(1 == '1');
// true
console.log(0 == false);
// true
// 피연산자들의 타입이 서로 다르면 같은 타입으로 바꾼 후, 일치 연산을 적용(Abstract Equality Comparison Algorithm이라 부름)
// 따라서 String과 Number를 비교하더라도 같은 타입으로 바꾸어 비교하므로 오류가 발생하지 않음

// 부등 연산
console.log(1 != '1');
// false
console.log(0 != true);
// true

// 일치 연산
console.log(1 === 1);
// true
console.log(1 === '1');
// false
// 타입 변환 없이, 완전 일치(strictly equal)한지를 검사한다
// 따라서 같은 타입이고 & 값이 같은 경우에만 true를 반환

// 불일치 연산
console.log(1 !== '1');
// true
console.log(1 !== 1);
// false

// 관계 비교 연산
console.log(1 < 1, 1 <= 1, 1 > 1, 1 >= 1);
// false true false tue