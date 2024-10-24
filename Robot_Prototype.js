function Robot (name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.maker = "ObjectsUA";
Robot.prototype.errorMassage = "All systems go.";

Robot.prototype.makeCoffee = function () {
  console.log ("Coffee is ready!");
}

Robot.prototype.blinkLinghts = function () {
  console.log (this.name + " using Blink Linghts!")
}

Robot.prototype.reportError = function () {
  console.log (this.name + " says " + this.errorMassage);
}
Robot.prototype.spillWater = function () {
  Robot.prototype.errorMassage = "I appear to have a short circuit!";
}

var robby = new Robot ("Robby", 1956, "Dr. Morbius");
var rosie = new Robot ("Rosie", 1962, "Georg Jatson");

function SpaceRobot (name, year, owner, homePlanet) {
  this.name = name;
  this.year = year;
  this.owner = owner;
  this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function () {
  alert (this.name + " says Sir, if i may venture an opinion...");
};

SpaceRobot.prototype.pilot = function () {
  alert (this.name + " says Thrusters? Are they important");
};

var c3po = new SpaceRobot ("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak ();
c3po.pilot ();
console.log (c3po.name + " was made by " + c3po.maker);

var simon = new SpaceRobot ("Simon", 2009, "Carla Diana", "Earth"); 
simon.makeCoffee ();
simon.blinkLinghts ();
simon.speak ();