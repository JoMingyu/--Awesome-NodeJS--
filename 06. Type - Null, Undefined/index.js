// null과 undefined는 모두 '값이 없음'을 나타내는데, 조금의 차이가 존재한다

var n = null;
// null은 비어 있거나, 존재하지 않는 & 아무 의미도 가지지 않는 '값'이다
console.log(typeof n);
// object
// null도 객체로 분류된다. 따라서 값으로 평가되어 null이 할당된 변수는 '그 값에는 아무 의미도 없지만, 아무튼 값이 정의되어 있다'고 평가한다

var u = undefined;
// undefined는 말 그대로 변수가 선언(declared)되었지만, 값은 정의되지 않았음(undefined)을 의미한다
console.log(typeof u);
// undefined는 타입도 undefined이다