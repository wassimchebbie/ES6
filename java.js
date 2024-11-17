const x = 20; // GLOBAL SCOPE
function changeX() { 
    const x = 30; // BLOCK SCOPE
    console.log(x); // 30
}
changeX();
console.log(x); // 20

let name = "wassim";
let fullname = `chebbi ${name}`; // Template literals
console.log(fullname); // chebbi wassim

let str = "hello world";
console.log(str.includes("world")); // true
console.log(str.includes("world", 8)); // false
console.log(str.startsWith("hello")); // true
console.log(str.startsWith("no")); // false
console.log(str.includes("id")); // false
console.log(str.includes("gomycode")); // false
console.log("hello world".repeat(4)); // hello worldhello worldhello worldhello world
console.log("chain".padStart(6, "*")); // ***chain
console.log("123".padStart(4, "0")); // 0123
console.log("123".padEnd(4, "0")); // 1230

// Number in ES6
console.log(Number.isNaN("NaN")); // false: "NaN" as a string is not NaN
console.log(Number.isInteger(30)); // true: 30 is an integer
console.log(Number.isInteger(30.5)); // false: 30.5 is not an integer
console.log(Number.isFinite(30)); // true: 30 is a finite number
console.log(Number.isFinite(NaN)); // false: NaN is not a finite number
console.log(Number.isFinite(Infinity)); // false: Infinity is not finite
console.log(Number.parseInt("30")); // 30
console.log(Number.parseFloat("30.5")); // 30.5

// Tables in ES6
const tableau = [12, 23, 45, 31];
const trouvez = tableau.find(num => num > 10);
console.log(trouvez); // 12
const trouvindex = tableau.findIndex(num => num > 12);
console.log(trouvindex); // 1

const array1 = [1, 2, 3];
array1.forEach(element => console.log(element * 3)); // 3, 6, 9

const str1 = "bonjour231";
const array = Array.from(str1);
console.log(array); // ['b', 'o', 'n', 'j', 'o', 'u', 'r', '2', '3', '1']

const arr = new Array(3).fill(0);
console.log(arr); // [0, 0, 0]

// Fixing .fill() usage
const arr1 = [1, 2, 3].fill(4, 1, 3);
console.log(arr1); // [1, 4, 4]

const BBHR = Array.of(1, 3);
console.log(BBHR); // [1, 3]

const YO = ["A", "B", "C"];
const iterator = YO.keys();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2

const tab = [21, 22, 23];
const [first, second, third] = tab;
console.log(first); // 21
console.log(second); // 22
console.log(third); // 23

const colors = ["red", "green"];
const [, secondColor = "blue"] = colors;
console.log(secondColor); // green

// Destructuring objects
const person = { name: "chebbi", age: 22 };
const { name: firstName, age: years } = person;
console.log(firstName); // chebbi
console.log(years); // 22

// Combining arrays using the spread operator
const tablo1 = [1, 2, 3];
const tablo2 = ["a", "b", "c"];
const tablo3 = [...tablo1, ...tablo2];
console.log(tablo3); // [1, 2, 3, "a", "b", "c"]

// Ternary operator example
const age1 = 16;
const check = age1 >= 18 ? "adult" : "mineur";
console.log(check); // mineur

const score=100;
const note=score>=80 && score<90 ? "A": 
score>=90 ? "B": 
score>=70 ? "C":"F";
console.log(note); // A

//function in js
function ajout(a,b){
    return a+b;
}
console.log(ajout(1,4));
//function in ES6
const ajout1=(a,b)=>a+b;
console.log(ajout1(3,5));
