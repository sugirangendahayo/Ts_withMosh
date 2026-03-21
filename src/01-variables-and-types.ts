// TypeScript Basics: Variables and Types

// Basic type annotations
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10];

// Type inference
let firstName = "John"; // TypeScript infers string
let age = 30; // TypeScript infers number

// Union types
let multiType: string | number = "hello";
multiType = 42; // Also valid

// Any type (use sparingly)
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void type (for functions that don't return)
function warnUser(): void {
    console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never type (for functions that never return)
function error(message: string): never {
    throw new Error(message);
}

// Object types
let user: { name: string; age: number } = {
    name: "Alice",
    age: 25
};

console.log("Variables and types example loaded!");
