describe('Equations', function() {
  var Equations = require('../../js/Equations');
  var eq;

  beforeEach(function() {
    eq = new Equations();
  });

  describe('New', function() {
    it('Should create a new equation Array with default value of 0', function() {
      expect(eq.getFull()).toEqual([0]);
    });
  });

  describe('getFull', function() {
    it('Should return the full array', function() {
      eq.append(4);
      eq.append(6);
      eq.append(7);
      expect(eq.getFull()).toEqual([4, 6, 7]);
    });
  });
  describe('getLast', function() {
    it('Should return only the default value of the new array', function() {
      expect(eq.getLast()).toEqual(0);
    });
    it('Should return only the last element within the array', function() {
      eq.append(2);
      eq.append(13);
      eq.append(723);
      expect(eq.getLast()).toEqual(723);
    });
  });
  describe('replaceLast', function() {
    it('Should return only the last element within the after being replaced', function() {
      eq.append(2);
      eq.append(13);
      eq.replaceLast(55);
      expect(eq.getLast()).toEqual(55);
    });
  });

  describe('Append', function() {
    it('Should replace the default 0 value within the array', function() {
      eq.append(4);
      expect(eq.getFull()).toEqual([4]);
    });
    it('Should append a multi digit interger', function() {
      eq.append(321);
      expect(eq.getFull()).toEqual([321]);
    });
    it('Should append a single digit float', function() {
      eq.append(1.1111);
      expect(eq.getFull()).toEqual([1.1111]);
    });
    it('Should append a math symbol', function() {
      eq.append('+');
      expect(eq.getFull()).toEqual(['+']);
    });
  });
});
