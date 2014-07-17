var Car = require("../src/car.js"),
  expect = require("chai").expect;


describe("Car", function(){

  describe("#make", function(){
    it("should be toyota", function(){
      var myRide = new Car("toyota", "camry", 1990);
      expect(myRide.make).to.equal("toyota");
    });
  });
});


describe("Car", function(){
  describe("#model", function() {
    it("should be camry", function() {
      var myRide = new Car("toyota", "camry", 1990);
      expect(myRide.make).to.equal("toyota");
    })
  })
})

describe("Car", function() {
  describe("#paint", function() {
    it("should return color of car", function() {
      var myRide = new Car("toyota", "camry", 1990);
      expect(myRide.prototype.paint("yellow")).to.equal("yellow")
    })
  })
})