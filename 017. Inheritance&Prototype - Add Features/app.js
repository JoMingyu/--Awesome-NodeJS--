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
// 상속 발생
// Person으로 향하는 프로토타입 체인
Student.prototype.study = function() {
  return '공부 : ' + this.name;
}
// 기능의 확장

console.log(new Student('PlanB').study());
