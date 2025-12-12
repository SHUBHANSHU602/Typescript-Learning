"use strict";
// 🟢 20 Beginner TypeScript Questions
// 1. Declare a variable username of type string.
// 2. Create a function multiply(a: number, b: number): number that returns the product.
// 3. Define a type alias ID for number or string.
// 4. Create an interface Book with properties:
Object.defineProperty(exports, "__esModule", { value: true });
// title: string
// author: string
// pages: number
// 5. Write a function getBookTitle(book: Book) that returns the title.
// 6. Declare an array of numbers scores and assign some values.
// 7. Create a tuple type [string, number] representing a student's name and age.
// 8. Create an enum Direction with values: Up, Down, Left, Right.
// 9. Write a function that takes a Direction and logs it.
// 10. Create a variable isLoggedIn with type boolean.
// 11. Create a function printMessage(msg: string): void that just logs the message.
// 12. Define an interface User with name, email, and age? (optional).
// 13. Create a variable user: User and assign values.
// 14. Write a function that takes an array of strings and returns the first item.
// 15. Create a literal type Role = "admin" | "user" | "guest".
// 16. Declare a function checkRole(role: Role) that prints different messages.
// 17. Create a type alias Point describing { x: number, y: number }.
// 18. Write a function distance(p1: Point, p2: Point) that returns a number.
// 19. Declare a variable that can hold either null or a number.
// 20. Create a readonly array of strings called colors.
// //intermediate
// reate a generic function identity<T>(value: T): T that returns whatever you pass in.
// 2. Create a type alias ApiResponse<T> with:
// data: T
// error: string | null
// 3. Write a function logLength<T extends { length: number }>(item: T) that logs the length.
// 4. Create an interface Product and use Partial<Product> to represent an "update".
// 5. Create a class Animal with properties name and a method makeSound().
// Then create a subclass Dog that overrides the method.
// 6. Write a function that accepts number | string and uses type narrowing to handle both.
// 7. Create a Readonly version of a User interface using Readonly<T>.
// 8. Define a function fetchData(url: string): Promise<string> that simulates an async fetch using setTimeout.
// 9. Write a generic interface Box<T> with a value: T property.
// 10. Create a function mergeObjects<T, U>(a: T, b: U) that returns one combined object.
// 11. Use Record<string, number> to create an object that stores numeric values for keys.
// 12. Create a function isString(value: any): value is string using a custom type guard.
// 13. Define an interface with an index signature, like:
// Dictionary { [key: string]: number }
// 14. Create a function that takes a tuple [number, number, number] and returns their sum.
// 15. Use Pick<User, "name" | "email"> to create a smaller version of User.
// 16. Write a function that accepts an array of Promise<number> and returns the sum once they all resolve.
// 17. Create a function getValue<T, K extends keyof T>(obj: T, key: K) that returns the property value safely.
// 18. Create a discriminated union for shapes:
// { kind: "circle"; radius: number }
// { kind: "square"; side: number }
// Write a function to calculate area.
// 19. Create a class Counter with methods increment(), decrement(), and getValue().
// 20. Use Exclude to remove "admin" from a union type:
// "admin" | "user" | "guest" → "user" | "guest"
//1st
let username;
//2nd
function multiply(a, b) {
    return a * b;
}
let a;
function getBookTitle(book) {
    return book.title;
}
const array = [3, 4, 5,];
//6th
const d = ["hey", 22];
//7th
var Direction;
(function (Direction) {
    Direction["Up"] = "go to heaven";
    Direction["Down"] = "go to hell";
})(Direction || (Direction = {}));
//8th
function disha(direction) {
    return direction;
}
console.log(Direction.Down);
// 9th
let isLoggedIn = true;
//10th
function printMessage(msg) {
}
// 12th
let user = {
    name: 'hey',
};
//13th
function arr(...str) {
    return str[0];
}
console.log(arr('hey', 'hui', 'tui'));
//15th
function checkRole(role) {
    console.log(role);
}
//# sourceMappingURL=practice.js.map