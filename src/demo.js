/*
var makeCar = function() {
  var newCar = {};
  newCar.honk = function() {
    console.log('honk honk');
  };
};

myCar1 = makeCar();
*/
/*
function Car () {
  // who is this?
  this.honk = function() {
    console.log('honk honk');
  };
};

var myCar1 = new Car();
var myCar2 = new Car();

console.log(myCar1.constructor);
console.log(myCar2.constructor);

myCar1.honk();
myCar2.honk();
*/
// var Car = function () {
//   // can not use this to replace Car here.
//   Car.prototype.honk = function () {
//     console.log('honk honk');
//   };
// };

// var myCar1 = new Car();
// var myCar2 = new Car();

// Car.prototype.drive = function () {
//   console.log('vrooom....');
// }

// myCar1.honk();
// myCar2.honk();
// myCar1.drive();
// myCar2.drive();

// myCar2.honk = function() {
//   console.log('meep meep');
// };

// myCar1.honk();
// myCar2.honk();

//================
// var Vehicle = function() {};

// Vehicle.prototype.drive = function() {
//   console.log('vrooom...');
// };


// var Car = function() {};
// Car.prototype = new Vehicle();


// Car.prototype.honk = function() {
//   console.log('honk honk');
// };

// var myCar = new Car();

// myCar.honk(); // outputs "honk honk"
// myCar.drive(); // outputs "vrooom..."

// p22 =================
Object.create = function(o) {
  // F is a temparary object, now empty;
  var F = function() {};
  // assign F with o, o is a real object;
  F.prototype = o;
  // return a F's instance 
  return new F();
};