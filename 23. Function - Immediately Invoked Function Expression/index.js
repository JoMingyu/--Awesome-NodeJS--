// 함수 선언식을 괄호로 감싸면, 해당 함수를 즉시 실행할 수 있게 된다
(function(a, b) {
    console.log(a + b);
})(1, 3);
// 익명 즉시 실행 함수

(function square(x) {
    console.log(x ** 2);
})(3);
// 기명 즉시 실행 함수