Array.prototype.chooseOfAll = function() {
  var idx = Math.floor(Math.random() * this.length);
  return this[idx];
}

var array = [1, 5, 4, 2, 9];
console.log(array.chooseOfAll());
