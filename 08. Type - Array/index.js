// Node.js에서는 타 언어의 배열과 동일하게, 하나의 변수에 여러 개의 값을 인덱스 기준으로 바인딩할 수 있는 Array를 지원한다
var arr = new Array(1, 2, 3);

arr[0] = 'PlanB';
arr[1] = 123;

console.log(arr)
// [ 'PlanB', 123, 3 ]

var arr = ['PlanB', 123]
// 리터럴 표현식

console.log(arr)
// [ 'PlanB', 123 ]

delete arr[0]
// 요소 제거