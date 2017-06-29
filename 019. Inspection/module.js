module.exports = {
  plus : function(a, b) {
    return a + b;
  },

  minus : function(a, b) {
    return a - b;
  },

  plusAll : function() {
    var sum = 0;
    for(i in arguments) {
      sum += arguments[i];
    }

    return sum;
  },

  Memo : function(msg) {
    // Constructor
    this.msg = msg;
    this.show = function() {
      return 'Memo is ' + this.msg;
    }
  }
}
