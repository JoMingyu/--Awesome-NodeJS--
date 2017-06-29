var person = {
  // 객체
  // 사람이 늘어날 때마다 새로운 객체를 만들어 주어야 함
  name: 'PlanB',
  intro: function() {
    return 'Name is ' + this.name;
  }
}

console.log(person.intro());

function Person(name) {
  // 생성자
  this.name = name;
  this.intro = function() {
    return 'Name is ' + this.name;
  }
}

console.log(new Person('PlanBv').intro());

// 일반적인 객체지향 언어에서 객체를 만드는 주체는 클래스지만
// 자바스크립트에서 객체를 만드는 주체는 함수이다.
// 함수 호출문 앞에 new를 붙이는 것을 통해서 객체를 만들 수 있다.
