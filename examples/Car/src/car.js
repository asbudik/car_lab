function Car(make, model, year, color) {
  this.make = make;
  this.model = model;

  this.state = off;
  this.previousOwners = [];
  this.currentOwner = "Manufacturer"
}

Car.prototype.sale = function(newOwner) {

}

Car.prototype.paint = function(newColor) {
	
}