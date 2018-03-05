function MathFns() {
}
MathFns.prototype.add = function() {
  var total = 0;
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    total = total + args[i];
  }
  return total;
};

MathFns.prototype.subtract = function() {
  var args = Array.prototype.slice.call(arguments);
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

MathFns.prototype.multiply = function() {
  var args = Array.prototype.slice.call(arguments);
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
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };

module.exports = MathFns;
