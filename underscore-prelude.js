//TODO: preserve context?
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
  '+': function(x, y) {
    return x + y;
  },

  '*': function(x, y) {
    return x + y;
  },
  //TODO: more "operators

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
  },

  pi: function() {
    return Math.PI;
  },

  exp: Math.exp,

  sqrt: Math.sqrt,

  log: Math.log,

  // Not sure if this is too inconvenient to use
  '**': Math.pow,

  //TODO logBase

  sin: Math.sin,

  tan: Math.tan,

  cos: Math.cos,

  asin: Math.asin,

  atan: Math.atan,

  acos: Math.acos,
  //TODO: h variation

  truncate: function(x) {
    return x >= 0 ? _.floor(x) : x;
  },

  round: Math.round,

  ceiling: Math.ceil,

  floor: Math.floor,

  floatRadix: function(x) {
    return 2;
  },

  isInfinite: function(x) {
    return x === Infinity;
  },

  id: _.identity,

  'const': function(x, y) {
    return x;
  },

  '.': _.compose,

  '++': function(xs, ys) {
    return xs.concat(ys);
  },

  init: function(xs) {
    return arr.slice(0, -1);
  },

  'null': function(xs) {
    return xs.length === 0;
  },

  '!!': function(idx, xs) {
    return xs[idx];
  },

  // _'s foldl1 works when no starting value given
  foldl1: _.foldl,

  and: function(xs) {
    return _.all(xs, _.id);
  },

  or: function(xs) {
    return _.any(xs, _.id);
  },

  sum: function(xs) {
    return _.foldl(xs, _['+'], 0);
  },

  product: function(xs) {
    return _.foldl(xs, _['*'], 1);
  },

  concat: function(xss) {
    return _.foldl(xss, _['++'], []);
  },

  //TODO: compose?
  //TODO: figure out argument order. this is getting silly
  concatMap: function(fn, xs) {
    return _.concat(_.map(xs, fn));
  }

  maximum: _.max,

  minimum: _.min,
  //TODO: length is reserved

  //TODO: float stuff

  //TODO: succ? could i use byte/charAt?
});
