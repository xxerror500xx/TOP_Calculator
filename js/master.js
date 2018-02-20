var calc = {
  init: function() {
    power = false;
    equation = [];
    prevEquations = [];
    buttons = [
      {id:'a-clr', class:'btn-danger'},
      {id:'clr', class:'btn-danger'},
      {id:'del', class:'btn-warning'},
      {id:'equals', class:'btn-success'},
      {id:'divide', class:'btn-info'},
      {id:'multiply', class:'btn-info'},
      {id:'add', class:'btn-info'},
      {id:'subtract', class:'btn-info'},
      {id:'dot', class:'btn-primary'},
      {id:'num-9', class:'btn-primary'},
      {id:'num-8', class:'btn-primary'},
      {id:'num-7', class:'btn-primary'},
      {id:'num-6', class:'btn-primary'},
      {id:'num-5', class:'btn-primary'},
      {id:'num-4', class:'btn-primary'},
      {id:'num-3', class:'btn-primary'},
      {id:'num-2', class:'btn-primary'},
      {id:'num-1', class:'btn-primary'},
      {id:'num-0', class:'btn-primary'},
      {id:'num-00', class:'btn-primary'}
    ];
  },
  // toggels power on and off
  pwr: function() {
    if(power) {
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
    if(power) {
      equation.push(value);
      this.updateCalcDisplay();
    }
  },
  updateCalcDisplay: function() {
    if (equation.length === 1 && equation[0] !== '0') {
      $('#calc-disp').val('');
    }
    if (equation.length > 0) {
      $('#calc-disp').val($('#calc-disp').val() + equation[equation.length-1]);
    }else if(equation.length === 0) {
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
      this.updateCalcDisplay();
    }
  },
  clrAll: function() {
    if (power) {
      this.clrCurrentEquation();
      $('#p-tBody').empty();
    }
  },
  del: function() {
    if (equation.length > 0 && power) {
      $('#calc-disp').val($('#calc-disp').val().slice(0, -1));
      equation.pop();
    }
  },
  equals: function() {
    eqString = equation.join('');
    console.log(eqString);
    if(eqString.includes('*')) {
      variables = eqString.split('*');
      result = parseInt(variables[0]);
      for (var i = 1; i < variables.length; i++) {
        result = eval(result * parseInt(variables[i]));
      }
    }else if (eqString.includes('/')) {
      variables = eqString.split('/');
      result = parseInt(variables[0]);
      for (var i = 1; i < variables.length; i++) {
        result = eval(result / parseInt(variables[i]));
      }
    }else if (eqString.includes('+')) {
      variables = eqString.split('+');
      result = 0;
      for (var i = 0; i < variables.length; i++) {
        result = eval(result + parseInt(variables[i]));
      }
    }else if (eqString.includes('-')) {
      variables = eqString.split('-');
      result = parseInt(variables[0]);
      for (var i = 1; i < variables.length; i++) {
        result = eval(result - parseInt(variables[i]));
        console.log(result);
      }
    }
    $('#calc-disp').val(result);
    equation = [result];
    this.updatePaperTape(eqString ,result);
  }
};
$(document).ready(function() {
  calc.init();
  calc.updateCalcDisplay();
});
