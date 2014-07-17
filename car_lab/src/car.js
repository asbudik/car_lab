require('locus');

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.previousOwners = [];
  this.currentOwner = "Manufacturer";
  this.passengers = [];
}

Car.prototype.sale = function(newOwner) {
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
  return('New owner is ' + this.currentOwner);
};

Car.prototype.paint = function(newColor) {
    this.paint = newColor;
}

Car.prototype.start = function() {
  if (this.state === "off") {
    this.state = "on";

  } else {
    this.state = "off";
  }
  return this.state;
}

Car.prototype.driveTo = function(destination) {
  if (this.state === "on") {
    console.log('You are driving to ' + destination);
  } else {
    console.log('Turn the car on!');
  }
}

Car.prototype.park = function() {
  if (this.state === "off") {
    console.log('You are now parked.');
  } else {
    console.log('Turn the car off before parking.');
  }
}

Car.prototype.pickUp = function(name) {
  if (this.state === "on") {
    this.passengers.push(name);
    console.log("Picking up", name);
  } else {
    console.log("Turn your car on");
  }
}

Car.prototype.dropOff = function(name) {
  if (this.state === "on") {
    for (i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i] === name) {
        this.passengers.splice(i, 1);
        console.log("Dropped off", name);
      }
    }

  } else {
    console.log("Turn your car on");
  }
}

eval(locus);