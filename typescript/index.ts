interface IAddress {
    address: string
}

interface IPerson {
    name: string
    age: number
    address: IAddress
}

interface ICalculus {
    add: (x: number, y: number) => {}
    multiply: (x: number, y: number) => {}
}

let myname: string = "Dimas"
myname = "Aries Dimas"
console.log(myname)

let myage: number = 34
let hobbies: string[] = ["Rocket League", "Counter Strike"]
let obj: IPerson = {
    name: 'aries',
    age: 34,
    address: { address: "karang Tengah" }
}

let people: IPerson[] = [
    { name: "Aries", age: 34, address: { address: "karang Tengah" } },
    { name: "Dimas", age: 32, address: { address: "Dusun Bambu" } }
]

let isMarried: boolean = true

console.log(people);

function add(x: number, y: number) {
    return x + y
}

function multiply(x: number, y: number) {
    return x * y
}

let result = add(45, 44)
let result2 = multiply(34, 45)

console.log(result, result2)