var array = [10, 16, 19, 20];
var obj = [key1=14, key2=61];

function f() {
  var sum = 0;
  for(i in this) {
    sum += this[i];
  }

  return sum;
}

console.log(f.apply(array));
console.log(f.apply(obj));
