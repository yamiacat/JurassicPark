var assert = require("assert");
var Enclosure = require("../enclosure.js");
var Dinosaur = require("../dinosaur.js");

describe("Enclosure", function() {
  var enclosure1;
  var dinosaur1;
  var dinosaur2;

  beforeEach(function() {
    enclosure = new Enclosure();
    dinosaur1 = new Dinosaur("Tyranosaur");
    dinosaur2 = new Dinosaur("Stegosaur", 20);
  });

  it("should start empty", function() {
    assert.strictEqual(0, enclosure.pen.length);
  });

  it("should be able to add dinosaur to enclosure", function() {
    enclosure.add(dinosaur1);
    assert.strictEqual(1, enclosure.pen.length);
  });


  it("should be able to add multiple dinosaurs to enclosure", function() {
    enclosure.add(dinosaur1);
    enclosure.add(dinosaur1);

    assert.strictEqual(2, enclosure.pen.length);
  });

  it("should be able to remove dinosaurs by type", function() {
    enclosure.add(dinosaur1);
    enclosure.add(dinosaur1);
    enclosure.add(dinosaur1);
    enclosure.add(dinosaur2);
    enclosure.removeByType("Tyranosaur");

    assert.strictEqual(1, enclosure.pen.length);
  });



});
