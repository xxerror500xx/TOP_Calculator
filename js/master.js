var calc = {
  pwr: function() {
    if (power) {
      $('#on-off').removeClass('btn sketch-btn btn-danger');
      $('#on-off').addClass('sketch-btn-outline');
      $('#press-txt').removeClass('invisible');
      this.rmvBtnClasses();
      $('#solar-panel').addClass('solar-grid-clear-y');
      $('#solar-panel').removeClass('solar-grid-blue-y');
      $('#on-off-txt').text('ON');
      this.clrAll();
    } else {
      // remove sketch-btn-outline class
      $('#on-off-txt').text('OFF');

      $('#on-off').removeClass('sketch-btn-outline');
      $('#on-off').addClass('btn sketch-btn btn-danger');
      $('#press-txt').addClass('invisible');
      $('#solar-panel').addClass('solar-grid-blue-y');
      $('#solar-panel').removeClass('solar-grid-clear-y');
      this.addBtnClasses();
    }
    power = !power;
    calc.updateCalcDisplay();
  },
  addBtnClasses: function() {
    for (var i = 0; i < buttons.length; i++) {
      $('#' + buttons[i].id).removeClass('sketch-btn-outline');
      $('#' + buttons[i].id).addClass('btn sketch-btn ' + buttons[i].class);
    }
  },
  rmvBtnClasses: function() {
    for (var i = 0; i < buttons.length; i++) {
      $('#' + buttons[i].id).removeClass(' btn sketch-btn ' + buttons[i].class);
      $('#' + buttons[i].id).addClass('sketch-btn-outline');
    }
  },
  addToEquation: function(value) {
    if (power) {
      if (equation.length === 0 && prevResult === "") {
        if (value.match(/\*|\/|\+/)) {
          this.error('Cant start an equation with /,*, or +');
        }else if (value === '.') {
          equation.push('0' + value);
          this.updateCalcDisplay();
          prevResult = '';
        } else {
          equation.push(value);
          this.updateCalcDisplay();
          prevResult = '';
        }
      } else if (equation.length === 0 && prevResult !== "") {
        equation.push(prevResult);
        equation.push(value);
        this.updateCalcDisplay();
        prevResult = '';
      } else {
        if (prevResult !== "" && value.match(/(\D)/)) {
          equation.push(prevResult);
          equation.push(value);
          prevResult = '';
          this.updateCalcDisplay();
        } else if (equation[equation.length - 1].match(/\*|\/|\+/) && value.match(/\*|\/|\+/)) {
          this.error('To many math symbols in a row.');
        } else if (equation[equation.length - 1] === '-' && value === '-') {
          console.log(equation[equation.length - 1]);
          this.error('Don\'t be so negative :(');
        } else {
          equation.push(value);
          this.updateCalcDisplay();
          prevResult = '';
        }
      }
    }
  },
  updateCalcDisplay: function() {
    if (equation.length === 1 && equation[0] !== '0') {
      $('#calc-disp').val('');
    }
    if (equation.length > 0) {
      $('#calc-disp').val($('#calc-disp').val() + equation[equation.length - 1]);
    } else if (equation.length === 0) {
      $('#calc-disp').val('0');
    }
    if (!power) {
      $('#calc-disp').val('');
    }
  },
  updatePaperTape: function(equationString, result) {
    // Row should equal pastEquations index
    $('#p-tBody').append('<tr class=""><td class="tape-font">' + equationString + '</td><td class="tape-font"> = ' + result + '</td></tr>');
  },
  clrCurrentEquation: function() {
    if (power) {
      equation = [];
      prevResult = '';
      this.updateCalcDisplay();
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
        this.updateCalcDisplay();
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
        this.updatePaperTape(eqString, result);
        prevResult = '';
        equation = [];
        result = '';
      } else {
        $('#calc-disp').val(result);
        prevResult = result;
        equation = [];
        result = '';
        this.updatePaperTape(eqString, prevResult);
      }
    }
  }
};
$(document).ready(function() {
  kbd.init();
  calc.updateCalcDisplay();
});
