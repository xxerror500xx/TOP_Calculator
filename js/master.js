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
    console.log("in pwr()");
    console.log(power);
    if(power) {
      $('#on-off').removeClass('btn sketch-btn btn-danger');
      $('#on-off').addClass('sketch-btn-outline');
      this.rmvBtnClasses();
      $('#on-off-txt').text('ON');
      this.clrAll();
    } else {
      // remove sketch-btn-outline class
      $('#on-off-txt').text('OFF');

      $('#on-off').removeClass('sketch-btn-outline');
      $('#on-off').addClass('btn sketch-btn btn-danger');
      this.addBtnClasses();
    }
    power = !power;
    // set toggle
    // add sketch-btn class
    // add handlers for math functions and calc-display
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
      console.log("adding val to equation: " + value);
      equation.push(value)
      this.updateCalcDisplay();
    }
  },
  updateCalcDisplay: function() {
    if (equation.length > 0) {
      $('#calc-disp').val($('#calc-disp').val() + equation[equation.length-1]);
    } else {
      $('#calc-disp').val('0');
    }
  },
  updatePaperTape: function(equationString, result) {
    // Row should equal pastEquations index
    $('#p-tBody').append('<tr class=""><td class="tape-font">' + equationString + '</td><td class="tape-font"> = ' + result + '</td></tr>')
  },
  clrCurrentEquation: function() {
    if (power) {
      $('#calc-disp').val('0');
      equation = [];
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
      console.log("lets multiply it " + eqString);
    }else if (eqString.includes('/')) {
      console.log("lets divide it " + eqString);
    }else if (eqString.includes('+')) {
      variables = eqString.split('+');
      result = 0;
      for (var i = 0; i < variables.length; i++) {
        result = eval(result + parseInt(variables[i]))
      }
      console.log(eqString + ' = ' + result);
    }else if (eqString.includes('-')) {
      variables = eqString.split('-');
      result = parseInt(variables[0]);
      for (var i = 1; i < variables.length; i++) {
        result = eval(result - parseInt(variables[i]))
        console.log(result);
      }
      console.log(eqString + ' = ' + result);
    }
    $('#calc-disp').val(result);
    equation = [result];
    this.updatePaperTape(eqString ,result);
  }
};
$(document).ready(function() {
  calc.init();
  calc.updateCalcDisplay();
  // calc.updatePaperTape("102938475609876543211234567890", "0.75");
  // calc.updatePaperTape("2 + 2", "4");
  // calc.updatePaperTape("5 * 5", "25");
  // calc.updatePaperTape("3 / 4", "0.75");
  // calc.updatePaperTape("2 + 2", "4");
  // calc.updatePaperTape("5 * 5", "25");
  // calc.updatePaperTape("3 / 4", "0.75");
  // calc.updatePaperTape("2 + 2", "4");
  // calc.updatePaperTape("5 * 5", "25");
  // calc.updatePaperTape("3 / 4", "0.75");
  // calc.updatePaperTape("2 + 2", "4");
  // calc.updatePaperTape("5 * 5", "25");
});
