// JS의 배열은 타입이 고정적이지 않음
// 32비트 인덱스를 사용한다
// 크기가 동적이다
// 배열을 생성하거나 다시 할당을 하더라도 크기를 다시 선언할 필요가 없다

let arr1 = [1, 2, 3, 'hello'];
// 1. 배열 리터럴

let arr2 = new Array();
// 2. Array() 생성자. 크기를 지정해주지 않으면 최대 크기로 잡음

let arr3 = new Array(40);
// 크기를 지정

arr3[0] = 3;
arr3[1] = 'hello';
// 인덱스 지정 직접 할당

arr3.push(true);
// push, 맨 끝에 추가

arr3.unshift('hi');
// 맨 앞에 추가, length가 증가함

console.log(`Pop : ${arr3.pop()}`);

for(let idx in arr3) {
    console.log(arr3[idx]);
}

for(let idx = 0; idx < arr3.length; idx++) {
    // 모든 배열은 length 속성이 있다
    if(arr3[idx] != undefined) {
        console.log(arr3[idx]);
    }
}

console.log(arr3.join(', '));
console.log(arr3.reverse());
console.log(arr3.sort());
console.log(arr3.concat(4, 5));
