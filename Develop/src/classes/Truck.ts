// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super(vin, color, make, model, year, weight, topSpeed);

    // Initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length === 4) {
      this.wheels = wheels;
    } else {
      this.wheels = [
        new Wheel('DefaultBrand', 20),
        new Wheel('DefaultBrand', 20),
        new Wheel('DefaultBrand', 20),
        new Wheel('DefaultBrand', 20)
      ];
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle if it exists
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The Truck is towing the ${vehicleMake} ${vehicleModel}.`);
    } else {
      console.log(`The ${vehicleMake} ${vehicleModel} is too heavy to be towed.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  printDetails(): void {
    // Call the printDetails method of the parent class
    super.printDetails();

    // Log the details of the Truck
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Wheels: ${this.wheels.map((wheel, index) => `Wheel ${index + 1} - Brand: ${wheel.brand}, Diameter: ${wheel.diameter}`).join('; ')}`);
  }
}

// Export the Truck class as the default export
export default Truck;
