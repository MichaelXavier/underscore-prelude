describe("underscore prelude extensions", function() {
  describe("fst", function() {
    it("returns the first element of the pair", function() {
      expect(_.fst(['a', 'b'])).toEqual('a');
    });

    it("is undefined for empty lists", function() {
      expect(_.fst([])).toBeUndefined();
    });
  });

  describe("snd", function() {
    it("returns the second element of the pair", function() {
      expect(_.snd(['a', 'b'])).toEqual('b');
    });

    it("is undefined for too-short lists", function() {
      expect(_.snd(['a'])).toBeUndefined();
    });
  });

  describe("negate", function() {
    it("flips the sign on the argument", function() {
      expect(_.negate(1)).toEqual(-1);
      expect(_.negate(-1)).toEqual(1);
    });
  });

  describe("abs", function() {
    it("returns the absolute value", function() {
      expect(_.abs(1)).toEqual(1);
      expect(_.abs(-1)).toEqual(1);
    });
  });

  describe("signum", function() {
    it("returns -1 for negative numbers", function() {
      expect(_.signum(-5)).toEqual(-1);
    });

    it("returns 0 for 0", function() {
      expect(_.signum(0)).toEqual(0);
    });

    it("returns 1 for positive numbers", function() {
      expect(_.signum(5)).toEqual(1);
    });
  });

  describe("quot", function() {
    it("performs integer division", function() {
      expect(_.quot(10, 3)).toEqual(3);
    });
  });

  describe("rem", function() {
    it("returns the integer remainder", function() {
      expect(_.quot(10, 3)).toEqual(1);
    });

    //TODO
    xit("obeys Prelude's rule for rem", function() {
      var x = 10, y = 3;
      expect(_.quot(x, y) * y + _.rem(x, y)).toEqual(x);
    });
  });

  describe("subtract", function() {
    it('subtracts', function() {
      expect(_.subtract(6,4)).toEqual(2);
    });
  });

  describe("even", function() {
    it("returns true if the number is even", function() {
      expect(_.even(4)).toEqual(true);
    });
    it("returns false if the number is odd", function() {
      expect(_.even(3)).toEqual(false);
    });
  });

  describe("odd", function() {
    it("returns true if the number is odd", function() {
      expect(_.odd(3)).toEqual(true);
    });
    it("returns false if the number is even", function() {
      expect(_.odd(4)).toEqual(false);
    });
  });
});
