var kbd = {
  init: function() {
    power = false;
    $(document).keypress(function(e) {
      if (power) {
        pressed = e.which;
        if (pressed >= 48 && pressed <= 57) {
          // Pressed a number unicode 48-57
          // 0,1,2,3,4,5,6,7,8,9
          numKeyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
          numKeyPressed = String(numKeyCodes.indexOf(pressed));
          console.log('Number: ' + numKeyPressed);
          calc.addToEquation(numKeyPressed);
        } else if (String(pressed).match(/(42|47|43|45)/)) {
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
        } else if (pressed === 46) {
          console.log('dot');
          // .
          // 46
          calc.addToEquation('.');
        } else if (pressed === 8) {
          console.log('backspace');
          // backspace
          // 8
          calc.del();
        } else if (String(pressed).match(/(61|13)/)) {
          console.log("Equals");
          // =, Enter
          // 61, 13
          calc.equals();
        } else {
          console.log("a non important button for this calculator");
        }
        console.log(e.which);

      } else {
        console.log("I gotZ no POWAH!!!");
      }
    });
    equation = [];
    prevResult = '';
    buttons = [
        { id: 'a-clr', class: 'btn-danger'},
        { id: 'clr', class: 'btn-danger'},
        { id: 'del', class: 'btn-warning'},
        { id: 'equals', class: 'btn-success'},
        { id: 'divide', class: 'btn-info'},
        { id: 'multiply', class: 'btn-info'},
        { id: 'add', class: 'btn-info'},
        { id: 'subtract', class: 'btn-info'},
        { id: 'dot', class: 'btn-primary'},
        { id: 'num-9', class: 'btn-primary'},
        { id: 'num-8', class: 'btn-primary'},
        { id: 'num-7', class: 'btn-primary'},
        { id: 'num-6', class: 'btn-primary'},
        { id: 'num-5', class: 'btn-primary'},
        { id: 'num-4', class: 'btn-primary'},
        { id: 'num-3', class: 'btn-primary'},
        { id: 'num-2', class: 'btn-primary'},
        { id: 'num-1', class: 'btn-primary'},
        { id: 'num-0', class: 'btn-primary'},
        { id: 'num-00', class: 'btn-primary'}
    ];
  }
};

// $(document).ready(function() {
//   kbd.init();
// });
