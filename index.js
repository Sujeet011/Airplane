function Vehicle(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed;
  this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    this.brand +
      " " +
      this.model +
      " is accelerating. Current speed: " +
      this.speed
  );
};

Vehicle.prototype.brake = function () {
  this.speed -= 10;
  console.log(
    this.brand + " " + this.model + " is braking. Current speed: " + this.speed
  );
};

Vehicle.prototype.refuel = function () {
  console.log(this.brand + " " + this.model + " is refueling.");
};

function Car(brand, model, speed, fuelType, numberOfWheels) {
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfWheels = numberOfWheels;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
  console.log(
    "Honk! Honk! The " + this.brand + " " + this.model + " is honking."
  );
};

function Airplane(
  brand,
  model,
  speed,
  fuelType,
  numberOfEngines,
  hasLandingGear
) {
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfEngines = numberOfEngines;
  this.hasLandingGear = hasLandingGear;
}

Airplane.prototype = Object.create(Vehicle.prototype);
Airplane.prototype.constructor = Airplane;

Airplane.prototype.takeOff = function () {
  console.log("The " + this.brand + " " + this.model + " is taking off.");
};

var myCar = new Car("Toyota", "Camry", 0, "gasoline", 4);
var myAirplane = new Airplane("Boeing", "747", 0, "jet fuel", 4, true);

myCar.accelerate();
myCar.brake();
myCar.refuel();
myCar.honk();

console.log("-*-*-*-*-*-*-*-*-*-");

myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
