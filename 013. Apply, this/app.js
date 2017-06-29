var array = [10, 16, 19, 20];
var obj = [key1=14, key2=61];

function f() {
  var sum = 0;
  for(i in this) {
    // this는 함수 내에서 함수 호출 맥락(context)를 의미함 : 상황에 따라서 달라짐
    sum += this[i];
  }

  return sum;
}

console.log(f.apply(array));
console.log(f.apply(obj));
