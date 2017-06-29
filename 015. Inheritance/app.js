function Person(name) {
  this.name = name;
  this.intro = function() {
    return 'Name is ' + this.name;
  }
}

function Student(name) {
  this.name = name;
}
Student.prototype = new Person();
// Student라는 생성자를 만들었다.
// 생성자의 prototype과 Person의 객체를 연결했더니
// 이 객체도 intro 메소드를 사용할 수 있게 되었다.
// 생성자의 prototype과 상속하고자 하는 객체를 연결하면 상속이 발생한다.

var p = new Student('PlanB');
console.log(p.intro());
