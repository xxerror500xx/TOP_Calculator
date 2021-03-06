var expect = require('chai').expect;
describe('Calculator', function() {
  var MathFns = require('../../src/js/MathFns');
  var mfns;
  beforeEach(function() {
    mfns = new MathFns();
  });

  describe('Multiply', function() {
    it('Should multiply 0 and 0', function() {
      expect(mfns.multiply([0,0])).to.equal(0);
    });
    it('Should multiply 0 and 1', function() {
      expect(mfns.multiply([0,1])).to.equal(0);
    });
    it('Should multiply two positive numbers', function() {
      expect(mfns.multiply([1,2])).to.equal(2);
    });
    it('Should multiply a negative times a positive number', function() {
      expect(mfns.multiply([-5,2])).to.equal(-10);
    });
    it('Should multiply more than two numbers', function() {
      expect(mfns.multiply([1,2,3])).to.equal(6);
    });
    it('Should multiply one negative and one positive number', function() {
      expect(mfns.multiply([-2,6])).to.equal(-12);
    });
    it('Should multiply two Decimals', function() {
      expect(mfns.multiply([1.5,0.5])).to.equal(0.75);
    });
    it('Should multiply a negative and a positive decimal', function() {
      expect(mfns.multiply([-1.5,0.5])).to.equal(-0.75);
    });
  });

  describe('Division', function() {
    it('Should divide 0 and 0', function() {
      expect(mfns.divide([0,0])).to.equal(0);
    });
    it('Should divide 0 and 1', function() {
      expect(mfns.divide([0,1])).to.equal(0);
    });
    it('Should divide two positive numbers', function() {
      expect(mfns.divide([1,2])).to.equal(0.5);
    });
    it('Should divide a negative times a positive number', function() {
      expect(mfns.divide([-5,2])).to.equal(-2.5);
    });
    it('Should divide three whole numbers into a decimal', function() {
      expect(mfns.divide([1,2,3])).to.equal(0.16666666666666666);
    });
    it('Should divide one negative and one positive number', function() {
      expect(mfns.divide([-2,6])).to.equal(-0.3333333333333333);
    });
    it('Should divide two Decimals', function() {
      expect(mfns.divide([1.5,0.5])).to.equal(3);
    });
    it('Should divide a negative and a positive decimal', function() {
      expect(mfns.divide([-1.5,0.5])).to.equal(-3);
    });
    it('Should divide two negative decimals', function() {
      expect(mfns.divide([-1.5,-0.11])).to.equal(13.636363636363637);
    });
  });

  describe('Add', function() {
    it('Should add two numbers', function() {
      expect(mfns.add([1,2])).to.equal(3);
    });
    it('Should add more than two numbers', function() {
      expect(mfns.add([1,2,3])).to.equal(6);
    });
	  it('Should add 0 and 0', function() {
		  expect(mfns.add([0,0])).to.equal(0);
	  });
    it('Should add 2 and 2', function() {
		  expect(mfns.add([2,2])).to.equal(4);
	  });
	  it('Should add positive numbers', function() {
		  expect(mfns.add([2,6])).to.equal(8);
	  });
    it('Should add negative numbers', function() {
      expect(mfns.add([-2,-6])).to.equal(-8);
    });
    it('Should add one negative and one positive number', function() {
      expect(mfns.add([-2,6])).to.equal(4);
    });
    it('Should add two Decimals', function() {
      expect(mfns.add([1.5,0.5])).to.equal(2);
    });
    it('Should add a negative and a positive decimal', function() {
      expect(mfns.add([-1.5,0.5])).to.equal(-1);
    });
  });

  describe('Subtract', function() {
    it('Should subtract 0 and 0', function() {
      expect(mfns.subtract([0,0])).to.equal(0);
    });
    it('Should subtract two positive numbers', function() {
      expect(mfns.subtract([1,2])).to.equal(-1);
    });
    it('Should subtract two positive numbers', function() {
      expect(mfns.subtract([2,2])).to.equal(0);
    });
    it('Should subtract two positive numbers that equal a negative', function() {
      expect(mfns.subtract([2,6])).to.equal(-4);
    });
    it('Should subtract two negative numbers', function() {
      expect(mfns.subtract([-2,-6])).to.equal(4);
    });
    it('Should subtract more than two numbers', function() {
      expect(mfns.subtract([1,2,3])).to.equal(-4);
    });
    it('Should subtract one negative and one positive number', function() {
      expect(mfns.subtract([-2,6])).to.equal(-8);
    });
    it('Should subtract two Decimals', function() {
      expect(mfns.subtract([1.5,0.5])).to.equal(1);
    });
    it('Should subtract a negative and a positive decimal', function() {
      expect(mfns.subtract([-1.5,0.5])).to.equal(-2);
    });
  });
  // This is the key method for parsing and calculating
  describe('Equals', function() {
    it('Should evaluate simple single operator expressions', function() {
      expect(mfns.equals([2, '*', 2])).to.equal(4);
      expect(mfns.equals([12, '/', 6])).to.equal(2);
      expect(mfns.equals([5, '+', 1])).to.equal(6);
      expect(mfns.equals([4, '-', 5])).to.equal(-1);
    });
    it('Should evaluate multiple operators of the same type', function() {
      expect(mfns.equals([2, '*', 2, '*', 2])).to.equal(8);
      expect(mfns.equals([1, '/', 1, '/', 1])).to.equal(1);
      expect(mfns.equals([1, '+', 1, '+', 2])).to.equal(4);
      expect(mfns.equals([1, '-', 1, '-', 2])).to.equal(-2);
    });
    it('Should respect the order of operations for multiple operators of different types', function() {
      expect(mfns.equals([2, '+', 2, '*', 2])).to.equal(6);
      expect(mfns.equals([2, '+', 2, '*', 2, '*', 2])).to.equal(10);
      expect(mfns.equals([2, '+', 2, '+', 2, '*', 2, '*', 2])).to.equal(12);
      expect(mfns.equals([2, '+', 2, '-', 2, '*', 2])).to.equal(0);
      expect(mfns.equals([2, '+', 2, '-', 2, '*', 2, '/', 2])).to.equal(2);
      expect(mfns.equals([2, '+', 2, '/', 2, '-', 2, '*', 2, '/', 2])).to.equal(1);
      expect(mfns.equals([50, '*', 2, '+', 2, '/', -2, '-', 2, '*', 2, '/', -2])).to.equal(101);
    });
  });
});
