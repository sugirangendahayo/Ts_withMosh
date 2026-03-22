// TypeScript Basics: Functions and Interfaces

// Function with type annotations
function add(x: number, y: number): number {
    return x + y;
}

// Arrow function with types
const multiply = (x: number, y: number): number => x * y;

// Function with optional parameters
function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

// Function with default parameters
function createEmail(name: string, domain: string = "example.com"): string {
    return `${name}@${domain}`;
}

// Function with rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function overloads
function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number {
    return typeof input === "string" ? input.toUpperCase() : input * 2;
}

// Interface definition
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
    readonly id: number; // Read-only property
}

// Interface with function signature
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

// Interface extending another interface
interface Employee extends Person {
    position: string;
    department: string;
}

// Using interfaces
const person: Person = {
    name: "John Doe",
    age: 30,
    id: 1
};

const employee: Employee = {
    name: "Jane Smith",
    age: 28,
    id: 2,
    position: "Developer",
    department: "Engineering"
};

// Implementing interface
const basicCalculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

console.log("Functions and interfaces example loaded!");
console.log("Add:", add(5, 3));
console.log("Greet:", greet("Alice"));
console.log("Sum:", sum(1, 2, 3, 4, 5));
