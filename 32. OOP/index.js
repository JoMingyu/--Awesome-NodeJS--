// class문을 흔하게 볼 수 있는 C++이나 Java와는 달리, JavaScript는 class가 포함되지 않는 프로토타입 기반 언어
function Person() { }
// function을 class로서 사용한다

var p1 = new Person();
var p2 = new Person();
// 새로운 인스턴스를 만들 때에는 new statement를 사용한다

function Person() {
    console.log('instantiated');
    // 생성자는 객체가 생성되는 순간 호출되는데, 일반적으로 생성자는 해당 클래스의 특정 메소드지만
    // JavaScript에서는 함수 자체가 그 객체의 생성자 역할을 하기 때문에 별도의 생성자 메소드를 정의할 필요가 없다
}

function Person(gender) {
    this.gender = gender;
    // property 정의
    // 클래스 내에서 property 작업은 현재 객체를 가리키는 this 키워드에 의해 이루어진다
    console.log('instantiated');
}

var p3 = new Person('male');
console.log(p3.gender);