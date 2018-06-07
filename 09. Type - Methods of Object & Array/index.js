var obj = {
    name: 'PlanB'
};

console.log(Object.keys(obj));
// [ 'name' ]

console.log(Object.values(obj));
// [ 'PlanB' ]

// ---

var arr = [1, 2, 3]

console.log(arr.length)
// 3

arr.length = 1
// length 속성을 변경하여 요소를 지울 수도 있음

arr.push(4)
console.log(arr.pop())
// 4

console.log(arr.indexOf(1));
// 0

arr = [1, 2, 3, 4, 5]
console.log(arr.splice(2, 2))
// [ 3, 4 ]
// splice(pos, count)
// pos번 인덱스부터 count개의 아이템을 제거하고, 제거된 아이템들의 배열이 반환됨

console.log(arr.slice(1, 3))
// [ 2, 5 ]
// slice(start, end)
// Python의 Sequence 객체 슬라이싱과 동일하게, start부터 end-1까지의 요소를 shallow copy하여 반환