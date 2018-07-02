// JavaScript의 스코프는 기본적으로 함수 단위지만
// ECMAScript6의 let 키워드를 통해 변수를 선언하면 블록 스코프 변수를 선언할 수 있다

{
    let a = true;
    console.log(a);
}

console.log(a);
// ReferenceError: a is not defined