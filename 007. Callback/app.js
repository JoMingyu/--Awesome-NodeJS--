function caller(func) {
  func(3);
}

caller(function(a) {
  console.log(a);
});
