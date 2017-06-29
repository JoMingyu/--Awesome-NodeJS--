module.exports = function(value) {
  return {
    // 객체에 함수를 담아 리턴
    minus: function() {
      return value - 1;
    },

    plus: function() {
      return value + 1;
    }
  }
}
