function f(n, func) {
  func(n);
}

f(3, (n) => {
  console.log(n * 2);
});

f(5, (n) => {
  console.log(n / 2);
});
