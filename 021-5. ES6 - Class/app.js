// ES5
function Foo(name) {
  this.name = name;
  this.getName = function() {
    return this.name;
  }
}

// ES6
// 사실 클래스도 함수이고 기존 prototype 기반 패턴에
// 문법적 요소(Syntactic sugar)만 추가됐을 뿐이긴 하다
class Foo2 {
  // 클래스 바디에는 메소드만을 포함할 수 있음
  // 클래스 바디에 멤버 변수를 선언하면 SyntaxError 발생

  constructor(n) {
    // 생성자
    this.name = n;
  }

  getName() {
    // 메소드
    return this.name;
  }

  static sayHello() {
    console.log('Hello');
  }
}

const foo = new Foo('PlanB');
// ES6에서의
console.log(foo.getName());

const foo2 = new Foo2('PlanB')
console.log(foo2.getName());
// 메소드를 통한 접근
console.log(foo2.name);
// 프로퍼티

Foo2.sayHello();
// Static 메소드 호출
