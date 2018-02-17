var calc = {
  init: function() {
    power = false;
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
      $('#on-off').removeClass(' btn sketch-btn btn-danger');
      $('#on-off').addClass('sketch-btn-outline');
      this.rmvBtnClasses();
      $('#on-off-txt').text('ON');
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
  }
};
$(document).ready(function() {
  calc.init();
});
