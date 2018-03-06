function MathFns() {
}
MathFns.prototype.add = function(array) {
  var total = 0;
  var args = array //Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    total = total + args[i];
  }
  return total;
};

MathFns.prototype.subtract = function(array) {
  var args = array; //Array.prototype.slice.call(arguments);
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    if (i === 0) {
      total = args[0];
    }else {
      total = total - args[i];
    }
  }
  return total;
};

MathFns.prototype.multiply = function(array) {
  var args = array; // Array.prototype.slice.call(arguments);
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    if (args[i] === 0) {
      return 0;
    }else if (i === 0 && args[0] !== 0) {
      total = args[0];
    }else {
      total = total * args[i];
    }
  }
  return total;
};

MathFns.prototype.divide = function(array) {
  var args = array; // Array.prototype.slice.call(arguments);
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    if (args[i] === 0) {
      // console.log("You should not try to divide by zero.");
      return 0;
    }else if (i === 0 && args[0] !== 0) {
      total = args[0];
    }else {
      total = total / args[i];
    }
  }
  return total;
};
MathFns.prototype.equals = function(expressionArray) {
  var exp = expressionArray;
  var result;
  // Will need a method to sort Array operators into GEMA / PEMDAS
  if (exp.includes('+')) {
    var additives= [];
    for (var i = 0; i < exp.length; i++) {
      if (exp[i] !== '+') {
        additives.push(exp[i]);
      }
    }
    result = this.add(additives);
  }
  return result;
};

module.exports = MathFns;
