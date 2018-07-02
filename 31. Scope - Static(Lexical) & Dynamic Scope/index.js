// 프로그래밍 언어에서 scope의 종류는 정적 스코프와 동적 스코프로 나뉜다
// 정적 스코프 : 컴파일 타임에 스코프가 결정
// 동적 스코프 : 런타임의 context에 따라 스코프가 결정
// JavaScript는 정적 스코프를 가지고 있으며, 이는 lexical scope라고도 부른다

var x = 'global';
 
function func1() {
  var x = 'local';
  func2();
}
 
function func2() {
  console.log(x);
}
 
func1();
func2();
// func1에서 x를 'local'로 재선언했으나, 두 함수 호출 결과는 모두 'global'