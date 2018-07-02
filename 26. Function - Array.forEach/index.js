// 콜백을 배우면 세상이 편해진다
// 그 중에 한가지는, Array를 foreach하는 일이다
var arr = [1, 2, 3, 4, 5];

// Array foreach는 아래와 같이 for-of로도 가능한 일이긴 하다
for(var item of arr) {
    console.log(item);
}

arr.forEach(function(value, index) {
    console.log(value, index);
});
// forEach(callback(value, index))
// Array의 각 요소가 콜백에 차례대로 전달됨

arr.forEach(function(value) {
    console.log(value);
});
// Index 생략 가능

// 단, 엄~청 느리다(https://i.stack.imgur.com/YMote.png)