var assert = require("assert");
var DinoBreeder = require("../dino_breeder.js");
var Dinosaur = require("../dinosaur.js");
var Enclosure = require("../enclosure.js");

describe("Dino Breeder", function() {
  var dinosaur1;
  var dinosaur2;
  var enclosure;
  var dino_breeder;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyranosaur", 2);
    dinosaur2 = new Dinosaur("Triceratops", 5);
    enclosure = new Enclosure();
    enclosure.add(dinosaur1);
    dino_breeder = new DinoBreeder();
  });

  it("should calculate number of dinosaurs after one year, starting with one", function() {
    dino_breeder.calculateEnclosure(enclosure);
    assert.strictEqual(3, enclosure.pen.length);
  });

  it("should calculate number of dinosaurs after two years, starting with one", function() {
    dino_breeder.calculateEnclosure(enclosure);
    dino_breeder.calculateEnclosure(enclosure);

    assert.strictEqual(9, enclosure.pen.length);
  });

  it("should calculate number of dinosaurs after one year, starting with two", function() {
    enclosure.add(dinosaur2);
    dino_breeder.calculateEnclosure(enclosure);
    assert.strictEqual(9, enclosure.pen.length);
  });

  it("should calculate number of dinosaurs after two years, starting with two", function() {
    enclosure.add(dinosaur2);
    dino_breeder.calculateEnclosure(enclosure);
    dino_breeder.calculateEnclosure(enclosure);

    assert.strictEqual(45, enclosure.pen.length);
  });


});
