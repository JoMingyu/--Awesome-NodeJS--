// 표준 산술 연산자는 +, -, *, /
console.log(3 + 3);
// 6

console.log(3 + 0.0);
// 3(실수도 정수와 동일한 Number 객체이므로, *.0은 0으로 치환됨)

console.log(true + 3)
// 4

console.log(true + true + false)
// 2

console.log('PlanB' + 'PlanB');
// 'PlanBPlanB'

console.log(5 + 'PlanB');
// '5PlanB'

console.log(false + 'PlanB')
// 'falsePlanB'

console.log(-(2 ** 3))
// -8
// 거듭제곱 연산자와 단항 음수 존재

var n = 3
console.log(n++)
// 3

console.log(--n)
// 3
// 증감연산자 존재