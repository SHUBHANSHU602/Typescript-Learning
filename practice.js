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
//# sourceMappingURL=practice.js.map