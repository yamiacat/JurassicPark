var Dinosaur = require("./dinosaur.js");

var DinoBreeder = function() {}

DinoBreeder.prototype = {
  calculateEnclosure: function(enclosure) {
    var babyDinos = new Array();

    for(var dinosaur of enclosure.pen) {
      var numberOfBabies = dinosaur.annualOffspring;
        for (var i = 0; i < numberOfBabies; i++) {
          var baby = new Dinosaur(dinosaur.type, dinosaur.annualOffspring);
          babyDinos.push(baby);
        }
    }

    for(var baby of babyDinos) {
      enclosure.pen.push(baby);
    }
  }
}



module.exports = DinoBreeder;
