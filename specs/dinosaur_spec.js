var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {
  var dinosaur1;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Tyranosaur");
  });

  it("should have a type", function() {
    assert.strictEqual("Tyranosaur", dinosaur1.type);
  });

  it("should have a default annual offspring of 10", function() {
    assert.strictEqual(10, dinosaur1.annualOffspring);
  });


  it("should allow annual offspring to be set", function() {
    var dinosaur2 = new Dinosaur("Stegosaur", 20)
    assert.strictEqual(20, dinosaur2.annualOffspring);
  });


});
