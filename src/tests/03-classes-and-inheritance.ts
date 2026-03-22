// TypeScript Basics: Classes and Inheritance

// Basic class
class Animal {
    // Properties with access modifiers
    public name: string;
    private age: number;
    protected species: string;

    // Constructor
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    // Public method
    public makeSound(): void {
        console.log(`${this.name} makes a sound`);
    }

    // Private method
    private getAge(): number {
        return this.age;
    }

    // Protected method
    protected getInfo(): string {
        return `${this.name} is a ${this.age}-year-old ${this.species}`;
    }

    // Getter
    get animalAge(): number {
        return this.age;
    }

    // Setter
    set animalAge(newAge: number) {
        if (newAge > 0) {
            this.age = newAge;
        }
    }
}

// Inheritance
class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age, "Dog"); // Call parent constructor
        this.breed = breed;
    }

    // Override parent method
    public makeSound(): void {
        console.log(`${this.name} barks: Woof! Woof!`);
    }

    // New method specific to Dog
    public wagTail(): void {
        console.log(`${this.name} wags its tail happily`);
    }

    // Access protected method from parent
    public displayInfo(): void {
        console.log(this.getInfo());
        console.log(`Breed: ${this.breed}`);
    }
}

// Abstract class
abstract class Shape {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    // Abstract method (must be implemented by subclasses)
    abstract calculateArea(): number;

    // Regular method
    public getColor(): string {
        return this.color;
    }
}

// Concrete class extending abstract class
class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public getRadius(): number {
        return this.radius;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number {
        return this.width * this.height;
    }
}

// Interface for classes
interface Vehicle {
    brand: string;
    model: string;
    start(): void;
    stop(): void;
}

// Class implementing interface
class Car implements Vehicle {
    public brand: string;
    public model: string;
    private isRunning: boolean = false;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    public start(): void {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log(`${this.brand} ${this.model} started`);
        }
    }

    public stop(): void {
        if (this.isRunning) {
            this.isRunning = false;
            console.log(`${this.brand} ${this.model} stopped`);
        }
    }
}

// Static properties and methods
class MathUtils {
    public static PI: number = 3.14159;

    public static calculateCircumference(radius: number): number {
        return 2 * this.PI * radius;
    }
}

// Usage examples
console.log("Classes and inheritance example loaded!");

const animal = new Animal("Generic Animal", 5, "Unknown");
animal.makeSound();

const dog = new Dog("Buddy", 3, "Golden Retriever");
dog.makeSound();
dog.wagTail();
dog.displayInfo();

const circle = new Circle("Red", 5);
console.log(`Circle area: ${circle.calculateArea()}`);

const car = new Car("Toyota", "Corolla");
car.start();
car.stop();

console.log(`MathUtils PI: ${MathUtils.PI}`);
console.log(`Circumference: ${MathUtils.calculateCircumference(10)}`);
