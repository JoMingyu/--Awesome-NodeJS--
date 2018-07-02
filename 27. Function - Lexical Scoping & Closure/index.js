function init() {
    var name = 'PlanB';
    // init에 의해 생성된 지역변수
    function printName() {
        console.log(name);
        // 내부 함수에서 외부(부모) 함수의 지역변수를 사용
    }
    printName();
}

init();

// 이는 Lexical(어휘적) scoping에 의해 만들어지는 closure라는 현상이다
// Lexical scoping : 유효 범위를 함수 실행 순간이 아닌 정의 순간으로 참조하는 특성
// 클로저에 의해, 중첩되어 있는 함수들은 그들의 외부 유효 범위에서 선언된 변수들에 접근할 권한을 가지게 된다

function make() {
    var name = 'PlanB';
    function printName() {
        console.log(name);
    }
    return printName;
}

var f = make();
f();
// init()과 정확히 같은 출력을 만들어낸다
// 한 가지 다른 점은, 외부 함수가 내부 함수 자체를 반환한다는 것이다
// 몇몇 프로그래밍 언어에서, 함수 안의 지역 변수들은 그 함수가 실행되는 순간에만 존재한다
// 따라서 make()의 실행이 끝나면 name이라는 변수에 더 이상 접근할 수 없게 될 것으로 예상할 수 있는데, 여기선 여전히 잘 작동된다

// 클로저(closure)는 함수 + 함수가 선언된 어휘적 환경(Lexical Environment)의 조합인데,
// 이러한 '환경'은 클로저가 생성된 시점의 범위 내에 있는 모든 지역 변수로 구성된다
// 위의 경우, f는 make가 실행될 때 생성된 printName의 인스턴스에 대한 참조를 가진다
// 따라서 printName의 인스턴스는 name이 있는 lexical environment에 대한 참조를 유지한다