// Define a constructor function for different types of vehicles
function Car(options) {
    this.type = options.type || 'sedan';
    this.color = options.color || 'white';
}

function Truck(options) {
    this.type = options.type || 'pickup';
    this.color = options.color || 'black';
}

// Factory function to create vehicles based on type
function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function (options) {
    switch (options.vehicleType) {
        case 'car':
            return new Car(options);
        case 'truck':
            return new Truck(options);
        default:
            throw new Error('Invalid vehicle type.');
    }
};

// Usage
const factory = new VehicleFactory();
const car = factory.createVehicle({ vehicleType: 'car', color: 'blue' });
const truck = factory.createVehicle({ vehicleType: 'truck', color: 'red' });

console.log(car);
console.log(truck);
