module.exports = function(value) {
  return {
    minus: function() {
      return value - 1;
    },

    plus: function() {
      return value + 1;
    }
  }
}
