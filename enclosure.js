var Enclosure = function() {
  this.pen = [];
}

Enclosure.prototype = {
  add: function(dinosaur) {
    this.pen.push(dinosaur);
  },
  removeByType: function(typeForRemoval) {
    var indicesToRemove = new Array();

    for (var i = 0; i < this.pen.length; i++){
        if(this.pen[i].type === typeForRemoval) {
           indicesToRemove.push(i);
        }
    }
    for (var j = indicesToRemove.length -1; j >= 0; j--){
        this.pen.splice(indicesToRemove[j],1);
    }
  },
  removeByFertility: function(fertilityThreshold) {
    var indicesToRemove = new Array();

    for (var i = 0; i < this.pen.length; i++){
        if(this.pen[i].annualOffspring >= fertilityThreshold) {
           indicesToRemove.push(i);
        }
    }
    for (var j = indicesToRemove.length -1; j >= 0; j--){
        this.pen.splice(indicesToRemove[j],1);
    }
  }


}

module.exports = Enclosure;
