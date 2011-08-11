_.mixin({
  fst: function(pair) {
    return pair[0]; 
  },

  snd: function(pair) {
    return pair[1];
  },

  //TODO curry

  //TODO uncurry

  //TODO: Ord

  //TODO: Enum

  //TODO: Bounded

  negate: function(x) {
    return -x;
  },

  abs: Math.abs,

  signum: function(x) {
    return x < 0 ? -1 : x === 0 ? 0 : 1;
  },

  //TODO: fromInteger = parseInt(x, 10) ?

  //TODO: get a better understanding of diff between quot/rem and div/mod
  quot: function(x, y) {
    return Math.floor(x / y);
  },

  rem: function(x, y) {
    return x % y; //TOD: is this right?
  },

  toInteger: function(x) {
    return parseInt(x, 10);
  },

  //TODO: missed a lot of math stuff

  subtract: function(x, y) {
    return x - y;
  },

  even: function(x) {
    return _.rem(x, 2) === 0;
  },

  odd: function(x) {
    return _.not(_.even(x));
  },

  not: function(x) {
    return !x;
  }
});
