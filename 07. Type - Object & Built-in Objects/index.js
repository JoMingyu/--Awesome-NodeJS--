// JavaScript는 객체 기반의 스크립트 언어기 때문에, 객체 개념이 존재한다
// 기존의 객체지향 프로그래밍 언어에서 봐왔던, 클래스로 만드는 객체와는 조금 달라 보이는데
// 결국은 프로퍼티와 메소드를 가지고 있으므로 개념 상 동일하다

var obj = {
    name: 'PlanB'
};
// 객체의 리터럴 표현식. Python의 딕셔너리처럼 {}로 표현하며, key-value 쌍으로 이루어진다
// key에 따옴표는 optional하며, 변수의 값 자체를 key로 두려 한다면 해당 변수를 대괄호로 감싸야 한다

var key = 'name';

var obj = {
    [key]: 'PlanB'
};

obj.age = 19;
// 프로퍼티 정의

console.log(obj);
// { name: 'PlanB', age: 19 }

delete obj.name
// 프로퍼티 제거

var obj = Object();
// constructor를 이용하여 생성하는 방식

// 기본 타입의 wrapper 객체들도 빌트인에 존재한다
console.log(String("PlanB"));
console.log(Number(123));