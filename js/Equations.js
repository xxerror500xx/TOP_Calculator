function Equations() {
  this.eqArray = [0];
}

Equations.prototype.getFull = function getFull() {
  return this.eqArray
};

Equations.prototype.getLast = function getLast() {
  return this.eqArray[this.eqArray.length-1]
};
Equations.prototype.replaceLast = function replaceLast(val) {
  this.eqArray[this.eqArray.length-1] = val;
};
Equations.prototype.append = function append(val) {
  if (this.eqArray.length === 1 && this.eqArray[0] === 0) {
    this.eqArray = [val];
  }else {
    this.eqArray.push(val);
  }
  return this.eqArray
};

module.exports = Equations;

// In another module:
// var Equations = require("./my_object.js");
// var my_obj_instance = new Equations("foobar");
// my_obj_instance.foo(); // => "foobar"
