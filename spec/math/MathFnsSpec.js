describe("Calculator", function() {
  var MathFns = require('../../js/MathFns');
  var mfns;
  beforeEach(function() {
    mfns = new MathFns();
  });

  describe("Subtract", function() {
    it('Should subtract 0 and 0', function() {
      expect(mfns.subtract(0,0)).toEqual(0);
    });
    it("Should subtract two positive numbers", function() {
      expect(mfns.subtract(1,2)).toEqual(-1);
    });
    it('Should subtract two positive numbers', function() {
      expect(mfns.subtract(2,2)).toEqual(0);
    });
    it('Should subtract two positive numbers that equal a negative', function() {
      expect(mfns.subtract(2,6)).toEqual(-4);
    });
    it('Should subtract two negative numbers', function() {
      expect(mfns.subtract(-2,-6)).toEqual(4);
    });
    it("Should subtract more than two numbers", function() {
      expect(mfns.subtract(1,2,3)).toEqual(-4);
    });
    it('Should subtract one negative and one positive number', function() {
      expect(mfns.subtract(-2,6)).toEqual(-8);
    });
    it('Should subtract two Decimals', function() {
      expect(mfns.subtract(1.5,0.5)).toEqual(1);
    });
    it('Should subtract a negative and a positive decimal', function() {
      expect(mfns.subtract(-1.5,0.5)).toEqual(-2);
    });
  });

  describe("Add", function() {
    it("Should add two numbers", function() {
      expect(mfns.add(1,2)).toEqual(3);
    });
    it("Should add more than two numbers", function() {
      expect(mfns.add(1,2,3)).toEqual(6);
    });
	  it('Should add 0 and 0', function() {
		  expect(mfns.add(0,0)).toEqual(0);
	  });
    it('Should add 2 and 2', function() {
		  expect(mfns.add(2,2)).toEqual(4);
	  });
	  it('Should add positive numbers', function() {
		  expect(mfns.add(2,6)).toEqual(8);
	  });
    it('Should add negative numbers', function() {
      expect(mfns.add(-2,-6)).toEqual(-8);
    });
    it('Should add one negative and one positive number', function() {
      expect(mfns.add(-2,6)).toEqual(4);
    });
    it('Should add two Decimals', function() {
      expect(mfns.add(1.5,0.5)).toEqual(2);
    });
    it('Should add a negative and a positive decimal', function() {
      expect(mfns.add(-1.5,0.5)).toEqual(-1);
    });
  });

  describe("Multiply", function() {
    it('Should multiply 0 and 0', function() {
      expect(mfns.multiply(0,0)).toEqual(0);
    });
    it('Should multiply 0 and 1', function() {
      expect(mfns.multiply(0,1)).toEqual(0);
    });
    it("Should multiply two positive numbers", function() {
      expect(mfns.multiply(1,2)).toEqual(2);
    });
    it("Should multiply a negative times a positive number", function() {
      expect(mfns.multiply(-5,2)).toEqual(-10);
    });
    it("Should multiply more than two numbers", function() {
      expect(mfns.multiply(1,2,3)).toEqual(6);
    });
    it('Should multiply one negative and one positive number', function() {
      expect(mfns.multiply(-2,6)).toEqual(-12);
    });
    it('Should multiply two Decimals', function() {
      expect(mfns.multiply(1.5,0.5)).toEqual(0.75);
    });
    it('Should multiply a negative and a positive decimal', function() {
      expect(mfns.multiply(-1.5,0.5)).toEqual(-0.75);
    });
  });
});
