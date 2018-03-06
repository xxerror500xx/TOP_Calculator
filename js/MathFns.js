function MathFns() {
}
MathFns.prototype.add = function(additives) {
  var total = 0;
  for (var i = 0; i < additives.length; i++) {
    total = total + additives[i];
  }
  return total;
};

MathFns.prototype.subtract = function(subtractors) {
  var total = 0;
  for (var i = 0; i < subtractors.length; i++) {
    if (i === 0) {
      total = subtractors[0];
    }else {
      total = total - subtractors[i];
    }
  }
  return total;
};

MathFns.prototype.multiply = function(multipliers) {
  var total = 0;
  for (var i = 0; i < multipliers.length; i++) {
    if (multipliers[i] === 0) {
      return 0;
    }else if (i === 0 && multipliers[0] !== 0) {
      total = multipliers[0];
    }else {
      total = total * multipliers[i];
    }
  }
  return total;
};

MathFns.prototype.divide = function(divisors) {
  var total = 0;
  for (var i = 0; i < divisors.length; i++) {
    if (divisors[i] === 0) {
      // console.log("You should not try to divide by zero.");
      return 0;
    }else if (i === 0 && divisors[0] !== 0) {
      total = divisors[0];
    }else {
      total = total / divisors[i];
    }
  }
  return total;
};
MathFns.prototype.equals = function(expressionArray) {
  var exp = expressionArray;
  var result;
  // Will need a method to sort Array operators into GEMA / PEMDAS
  if (exp.includes('*')) {
    var multipliers = [];
    for (var i = 0; i < exp.length; i++) {
      if (exp[i] !== '*') {
        multipliers.push(exp[i]);
      }
    }
    result = this.multiply(multipliers);
  }
  if (exp.includes('/')) {
    var divisors = [];
    for (var i = 0; i < exp.length; i++) {
      if (exp[i] !== '/') {
        divisors.push(exp[i]);
      }
    }
    result = this.divide(divisors);
  }
  if (exp.includes('+')) {
    var additives = [];
    for (var i = 0; i < exp.length; i++) {
      if (exp[i] !== '+') {
        additives.push(exp[i]);
      }
    }
    result = this.add(additives);
  }
  if (exp.includes('-')) {
    var subtractors = [];
    for (var i = 0; i < exp.length; i++) {
      if (exp[i] !== '-') {
        subtractors.push(exp[i]);
      }
    }
    result = this.subtract(subtractors);
  }
  return result;
};

module.exports = MathFns;
