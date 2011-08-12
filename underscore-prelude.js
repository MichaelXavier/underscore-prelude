(function() {
  var ArrayProto = Array.prototype
      slice      = ArrayProto.slice;
      flip       = function(fn) {
        return function(a, b) {
          var args = [b, a].concat(slice.call(arguments, 2));
          // The context is probably wrong
          return fn.apply(this, args);
        };
      },
      concat     = function(xss) {
        return _.foldl(_['++'], xss, []);
      },
      map        = flip(_.map)


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
      return x * y;
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

    // Going to make this a partially applied function because it is worthless otherwise
    'const': function(x) {
      return function() { return x; };
    },

    '.': _.compose,

    '++': function(xs, ys) {
      return xs.concat(ys);
    },

    init: function(xs) {
      return xs.slice(0, -1);
    },

    'null': _.isEmpty,

    '!!': function(idx, xs) {
      return xs[idx];
    },

    // _'s foldl1 works when no starting value given
    foldl:  flip(_.foldl),

    foldl1: flip(_.foldl),

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

    //TODO: string as array?
    concat: concat,
    //TODO: compose?
    //TODO: figure out argument order. this is getting silly
    concatMap: _.compose(concat, map),

    maximum: _.max,

    minimum: _.min,

    replicate: function(n, x) {
      var xs = new Array(n);
      while (--n >= 0) xs[n] = x;
      return xs;
    },

    take: function(n, xs) {
      return xs.slice(0, n);
    },

    drop: function(n, xs) {
      return xs.slice(_.maximum([n, 0]));
    },

    splitAt: function(n, xs) {
      return [_.take(n, xs), _.drop(n, xs)];
    },

    //TODO: refactor

    takeWhile: function(fn, xs) {
      var i = 0;
      while (i < xs.length && fn(xs[i])) i++;
      return _.take(i, xs);
    },

    dropWhile: function(fn, xs) {
      var i = 0;
      while (i < xs.length && fn(xs[i])) i++;
      return _.drop(i, xs);
    },
    //TODO: length is reserved

    //TODO: float stuff

    //TODO: succ? could i use byte/charAt?

    flip: flip,

    map: map
  });
})();
