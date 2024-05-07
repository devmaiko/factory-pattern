# Factory Pattern

The Factory Pattern is a design pattern used in object-oriented programming to provide a way to create objects without specifying their exact class. It defines an interface for creating objects, but lets subclasses alter the type of objects that will be created.

## How it Works

In the Factory Pattern, we define a factory interface with a method for creating objects. Subclasses then implement this interface to create objects of different types.

### Key Components

- **Product**: The interface or abstract class for the objects created by the factory.
- **Concrete Products**: The actual implementations of the Product interface.
- **Factory**: An interface or abstract class defining a method for creating objects. Subclasses override this method to produce objects of various types.
- **Concrete Factory**: The subclass that overrides the factory method to produce specific types of objects.

## Example

Consider a scenario where we have a Vehicle factory that can create different types of vehicles such as cars, trucks, and bicycles. We can define a factory method `createVehicle` that takes a parameter indicating the type of vehicle to create.

```javascript
function VehicleFactory() {}

VehicleFactory.prototype.createVehicle = function (type) {
  switch (type) {
    case 'car':
      return new Car();
    case 'truck':
      return new Truck();
    case 'bicycle':
      return new Bicycle();
    default:
      throw new Error('Invalid vehicle type.');
  }
};
```

## Advantages

- **Decouples object creation**: Clients don't need to know the concrete class of objects they create, thus promoting loose coupling.
- **Easy to extend**: Adding new types of objects is easy by creating new concrete factory classes.
- **Promotes code reuse**: Since object creation logic is centralized in the factory, it can be reused across multiple parts of the codebase.

## Disadvantages

- **Increased complexity**: Introducing a factory can add complexity to the codebase, especially for small projects or when there are only a few types of objects to create.
- **Potential misuse**: Developers might misuse the factory by creating overly complex factories or violating the Single Responsibility Principle.

## When to Use

- Use the Factory Pattern when you want to delegate the responsibility of object creation to a separate component.
- Use it when the system needs to be independent of how its objects are created, composed, and represented.
- Use it to provide a centralized point for controlling object creation, ensuring consistency and avoiding duplication of code.

## Further Reading

- [Factory Method Pattern - Wikipedia](https://en.wikipedia.org/wiki/Factory_method_pattern)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)


