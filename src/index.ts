// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles = [];

// Create a truck instance once the Truck class is implemented
const truck1 = new Truck(
  Cli.generateVin(), // Generate a VIN using the static method in Cli class
  "red", // color
  "Ford", // make
  "F-150", // model
  2021, // year
  5000, // weight
  120, // top speed
  10000, // towing capacity
  [] // wheels - leave empty to use default wheels
);

// Create a car instance with default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// Create a motorbike instance once the Motorbike class is implemented
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  Cli.generateVin(), // Generate a VIN using the static method in Cli class
  "black", // color
  "Harley Davidson", // make
  "Sportster", // model
  2021, // year
  500, // weight
  125, // top speed
  motorbike1Wheels // wheels array
);

// Push vehicles to the array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Create a new instance of the Cli class
const cli = new Cli(vehicles);

// Start the cli
cli.startCli();
