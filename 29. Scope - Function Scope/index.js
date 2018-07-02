// Scope(유효 범위) 개념은 어느 프로그래밍 언어를 배우든 짚고 넘어가야 하는데,
// JavaScript에서 scoping에 대한 특이한 점은, scope가 Python처럼 블록이 아닌 함수 단위로 정의된다는 점이다
function sayHello(hello=false) {
    if(hello) {
        var message = 'hello!';
    } else {
        var message = 'hi!';
    }
    // 타 프로그래밍 언어들은 scope가 블록 단위기 때문에 위와 같이 if와 else에서 정의된 message에는 접근이 불가능하지만

    console.log(message);
    // JavaScript의 유효 범위는 함수 단위이기 때문에 message 변수는 function level scope를 가진다
}

sayHello();