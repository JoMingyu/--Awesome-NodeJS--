// for문도 일반적인 형태(= for (init; cond; expr) {} )로 작성한다
arr = [1, 2, 3, 4]

for(var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}

// for - in을 지원하는데, 일반적으로 우리가 알고 있는 for-each가 아니라 이것도 인덱스 기반으로 돌아간다
for(var idx in arr) {
    console.log(idx, arr[idx]);
}

// array의 각 엘리먼트를 변수에 바인딩하며 도는 for문은 for - of로 작성한다
for(var item of arr) {
    console.log(item);
}