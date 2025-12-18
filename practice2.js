"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ram;
const kavi = (input) => {
    if (typeof input === 'string')
        console.log('hello');
    else {
        return null;
    }
};
function area(obj12) {
    if (obj12.kind === "circle") {
        return Math.PI * (obj12.radius) ** 2;
    }
}
function add(shape) {
    if ('role' in shape) {
        shape.role;
    }
}
function handle(p) {
    if (p.type === 'load') {
        p.status;
    }
    else {
        return null;
    }
}
//strict and null
function printName(namie) {
    if (!namie) {
        return 'no name';
    }
    return namie.toUpperCase();
}
function printAge(user) {
    if (user.age !== undefined) {
        console.log(user.age);
    }
}
//doms
const el = document.getElementById("root");
if (el) {
    el.innerHTML = "Hello";
}
//
async function getMessage() {
    return 'hello shubhanshu';
}
//# sourceMappingURL=practice2.js.map