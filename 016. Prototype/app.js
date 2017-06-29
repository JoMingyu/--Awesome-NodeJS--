function F() {}
F.prototype.prop = true;
/*
함수=객체
그러므로 생성자로 사용될 함수도 객체
객체는 프로퍼티를 가질 수 있는데, prototype이라는 프로퍼티는
용도가 약속되어 있는 특수한 프로퍼티.
prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결됨.

ex) Under 생성자의 prototype에 F 생성자를 인스턴스화 하면
Under 생성자의 프로토타입은 F 생성자의 프로토타입을 참조한다
-> prototype은 객체와 객체를 연결하는 체인의 역할을 함
-> 이러한 관계를 prototype chain이라고 한다.
*/

function Under() {}
Under.prototype = new F();
var u = new Under();

console.log(u.prop);
