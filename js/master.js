var calc = {
  init: function() {
    power = false;
    $( document ).keypress(function(e) {
      if (power) {
        pressed = e.which;
        if (pressed >= 48 && pressed <= 57) {
          // Pressed a number unicode 48-57
          // 0,1,2,3,4,5,6,7,8,9
          numKeyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
          numKeyPressed = String(numKeyCodes.indexOf(pressed));
          console.log('Number: ' + numKeyPressed);
          calc.addToEquation(numKeyPressed);
        }else if (String(pressed).match(/(42|47|43|45)/)) {
          console.log('Symbols');
          // *,/,+,-
          // 42, 47, 43, 45
          switch (pressed) {
            case 42:
              calc.addToEquation('*');
              break;
            case 47:
              calc.addToEquation('/');
              break;
            case 43:
              calc.addToEquation('+');
              break;
            case 45:
              calc.addToEquation('-');
              break;
            default:

          }
        }else if (pressed === 46) {
          console.log('dot');
          // .
          // 46
          calc.addToEquation('.');
        }else if (pressed === 8) {
          console.log('backspace');
          // backspace
          // 8
          calc.del();
        }else if (String(pressed).match(/(61|13)/)) {
          console.log("Equals");
          // =, Enter
          // 61, 13
          calc.equals();
        }else {
          console.log("a non important button for this calculator");
        }
        console.log(e.which);

      } else {
        console.log("I gotZ no POWAH!!!");
      }
    });
    equation = [];
    prevResult = '';
    buttons = [{
        id: 'a-clr',
        class: 'btn-danger'
      },
      {
        id: 'clr',
        class: 'btn-danger'
      },
      {
        id: 'del',
        class: 'btn-warning'
      },
      {
        id: 'equals',
        class: 'btn-success'
      },
      {
        id: 'divide',
        class: 'btn-info'
      },
      {
        id: 'multiply',
        class: 'btn-info'
      },
      {
        id: 'add',
        class: 'btn-info'
      },
      {
        id: 'subtract',
        class: 'btn-info'
      },
      {
        id: 'dot',
        class: 'btn-primary'
      },
      {
        id: 'num-9',
        class: 'btn-primary'
      },
      {
        id: 'num-8',
        class: 'btn-primary'
      },
      {
        id: 'num-7',
        class: 'btn-primary'
      },
      {
        id: 'num-6',
        class: 'btn-primary'
      },
      {
        id: 'num-5',
        class: 'btn-primary'
      },
      {
        id: 'num-4',
        class: 'btn-primary'
      },
      {
        id: 'num-3',
        class: 'btn-primary'
      },
      {
        id: 'num-2',
        class: 'btn-primary'
      },
      {
        id: 'num-1',
        class: 'btn-primary'
      },
      {
        id: 'num-0',
        class: 'btn-primary'
      },
      {
        id: 'num-00',
        class: 'btn-primary'
      }
    ];
  },
  pwr: function() {
    if (power) {
      $('#on-off').removeClass('btn sketch-btn btn-danger');
      $('#on-off').addClass('sketch-btn-outline');
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
      if (equation.length === 0) {
        if (value.match(/\*|\/|\+/)) {
          this.error('Cant start an equation with /,*, or +');
        } else {
          equation.push(value);
          this.updateCalcDisplay();
          prevResult = '';
        }
      } else {
        if (prevResult !== "" && value.match(/(\D)/)) {
          equation.push(prevResult);
          equation.push(value);
          prevResult = '';
          this.updateCalcDisplay();
        } else if (equation[equation.length - 1].match(/\*|\/|\+/) && value.match(/\*|\/|\+/)) {
          this.error('To many math symbols in a row.');
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
    }else {
      $('#calc-disp').val(result);
      prevResult = result;
      equation = [];
      result = '';
      this.updatePaperTape(eqString, prevResult);
    }
  }
};
$(document).ready(function() {
  calc.init();
  calc.updateCalcDisplay();
});
