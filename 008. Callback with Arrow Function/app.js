function f(n, func) {
  func(n);
}

// Arrow function : ES6의 표현법
f(3, (n) => {
  console.log(n * 2);
});

f(5, (n) => {
  console.log(n / 2);
});
