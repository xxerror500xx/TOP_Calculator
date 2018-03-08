calc = {
  addToEquation: function(value) {
    if (power) {
      if (equation.length === 0 && prevResult === "") {
        if (value.match(/\*|\/|\+/)) {
          this.error('Cant start an equation with /,*, or +');
        }else if (value === '.') {
          equation.push('0' + value);
          display.updateCalcDisplay();
          prevResult = '';
        } else {
          equation.push(value);
          display.updateCalcDisplay();
          prevResult = '';
        }
      } else if (equation.length === 0 && prevResult !== "") {
        equation.push(prevResult);
        equation.push(value);
        display.updateCalcDisplay();
        prevResult = '';
      } else {
        if (prevResult !== "" && value.match(/(\D)/)) {
          equation.push(prevResult);
          equation.push(value);
          prevResult = '';
          display.updateCalcDisplay();
        } else if (equation[equation.length - 1].match(/\*|\/|\+/) && value.match(/\*|\/|\+/)) {
          this.error('To many math symbols in a row.');
        } else if (equation[equation.length - 1] === '-' && value === '-') {
          console.log(equation[equation.length - 1]);
          this.error('Don\'t be so negative :(');
        } else {
          equation.push(value);
          display.updateCalcDisplay();
          prevResult = '';
        }
      }
    }
  },
  clrCurrentEquation: function() {
    if (power) {
      equation = [];
      prevResult = '';
      display.updateCalcDisplay();
    }
  },
  clrAll: function() {
    if (power) {
      this.clrCurrentEquation();
      $('#p-tBody').empty();
      prevResult = '';
    }
  },
  del: function() {
    if (power) {
      if (equation.length > 0) {
        $('#calc-disp').val($('#calc-disp').val().slice(0, -1));
        equation.pop();
      } else if (equation.length === 0 && prevResult !== '') {
        prevResult = '';
        display.updateCalcDisplay();
      }
    }
  },
  error: function(errString) {
    console.log(errString);
  },
  equals: function() {
    if (equation.length === 0) {
      console.log('empty equation Yo!');
    } else {
      eqString = equation.join('');
      console.log(eqString);
      if (eqString.includes('*')) {
        variables = eqString.split('*');
        result = parseInt(variables[0]);
        for (var i = 1; i < variables.length; i++) {
          result = eval(result * parseInt(variables[i]));
        }
      } else if (eqString.includes('/')) {
        variables = eqString.split('/');
        result = parseInt(variables[0]);
        for (var i = 1; i < variables.length; i++) {
          if (parseInt(variables[i]) !== 0) {
            result = eval(result / parseInt(variables[i]));
          } else {
            this.error("Really a divide by ZERO C'mon!?");
            result = '¯＼(º_o)/¯';
          }
        }
      } else if (eqString.includes('+')) {
        variables = eqString.split('+');
        result = 0;
        for (var i = 0; i < variables.length; i++) {
          result = eval(result + parseInt(variables[i]));
        }
      } else if (eqString.includes('-')) {
        variables = eqString.split('-');
        result = parseInt(variables[0]);
        for (var i = 1; i < variables.length; i++) {
          result = eval(result - parseInt(variables[i]));
          console.log(result);
        }
      }
      if (result === '¯＼(º_o)/¯') {
        $('#calc-disp').val(result);
        display.updatePaperTape(eqString, result);
        prevResult = '';
        equation = [];
        result = '';
      } else {
        $('#calc-disp').val(result);
        prevResult = result;
        equation = [];
        result = '';
        display.updatePaperTape(eqString, prevResult);
      }
    }
  }
};
$(document).ready(function() {
  kbd.init();
  display.updateCalcDisplay();
});
