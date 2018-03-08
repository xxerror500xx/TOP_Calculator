var display = {
  pwr: function() {
    if (power) {
      $('#on-off').removeClass('btn sketch-btn btn-danger');
      $('#on-off').addClass('sketch-btn-outline');
      $('#press-txt').removeClass('invisible');
      this.rmvBtnClasses();
      $('#solar-panel').addClass('solar-grid-clear-y');
      $('#solar-panel').removeClass('solar-grid-blue-y');
      $('#on-off-txt').text('ON');
      calc.clrAll();
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
    this.updateCalcDisplay();
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
  updatePaperTape: function(equationString, result) {
    // Row should equal pastEquations index
    $('#p-tBody').append('<tr class=""><td class="tape-font">' + equationString + '</td><td class="tape-font"> = ' + result + '</td></tr>');
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
  }
}
