const stringify = require("json-stable-stringify");

const obj = { c: 8, b: [{ z: 6, o: { b: 3 }, y: 5, x: 4 }, 7], a: 3 };

console.log("belajar npm");
console.log(JSON.stringify(obj));
console.log(stringify(obj));
