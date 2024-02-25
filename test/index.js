console.log("task 1 done");
setTimeout(() => {
  console.log("task 3 done");
}, 0);
console.log("task 2 done");

function hello() {
  console.log("hello");
  return function () {
    console.log("world");
    return true;
  };
}

hello();
hello()();

// const myname = "dimas";
// myname = "aries";

const numbers = [1, 2, 3];
numbers[2] = 56;

console.log(numbers);
