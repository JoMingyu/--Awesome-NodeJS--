// 타 언어(Java 등)에서 this는 메소드를 호출한 객체에 바인딩되고, 추가적인 기능은 없다
// JavaScript에서 this는 context에 따라 바인딩이 달라진다

var obj = {
    printMsg: function() {
        // 1. 객체의 메소드 안에서 사용된 this는 해당 메소드를 호출한 객체에 바인딩된다
        console.log(this.msg);
    }
};

var planB = obj;

planB.msg = 'PlanB';
planB.printMsg();

var geni = obj;

geni.msg = 'Geni';
geni.printMsg();

function printMsg() {
    console.log(this.msg);
    console.log(this === global);
    // 2. 함수에 사용된 this는 전역 객체(global)를 가리킨다
}

var msg = 'PlanB!';
printMsg();