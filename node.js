/*
var name = "Rajina";

console.log(name); 

let hobbies = "coding, playing,eating";

console.log(hobbies);

const learning = "Always"; // yesko value change hudenw
console.log(learning);

name="yoyo";
console.log(name); //yo chai mathi ko name ko value chnage gareko

// let or var chai chnage grnu xa vney use grni;; but now a days we use let rather than var 
// const chai change nagsrna ko lagi

let a = 10;
var b = 11;

function test(){
    let a = 20; //locally kaam garyo
    b = 30;

    console.log(a);
    console.log(b);
}

test();

console.log(b);
console.log(a);


//let name = "Rajina";


// normal function 

function rajina(name){

    console.log("hello"+ name);
    //console.log("hello", name);
}

rajina("Rajina");

// arrow funstion 

const me = (name) => {

    console.log("hello"+ name);
    //console.log("hello", name);
}

me("grx");
*/

//hoisting

//developer.mozilla.org/java script/data_structure

//array and object

// s = "jello";
// console.log(typeof s);
// console.log(s);

// var name = "Subash";
// console.log(name);

// let hobbies = "Coding, Nodejs, Reactjs";
// console.log(hobbies);

// const learning = "Always";
// console.log(learning);
// var a = 40;
// var b = 20;

// function test() {
//   let a = 20;
//   b = 30;

//   console.log(a);
//   console.log(b);
// }

// test();

// console.log(b);
// console.log(a);

// prabin2();
// prabin("Test");

// const prabin = (givenName) => {
//   console.log("Hello " + givenName);
//   console.log("Hello ", givenName);
// };

// function prabin2() {
//   console.log("Prabin 2 is printing");
// }

// prabin("Suaper", "Jello");

// function simpletVarAndLetExample() {
//   if (true) {
//     var x = 10;
//     let y = 20;
//   }
//   console.log(x); // Output: ?
//   console.log(y); // Output: ?
// }

// // simpletVarAndLetExample();

// let student = {
//   id: "1",
//   name: "ABC",
// };

// let arr = ["Hello", 1, "2"];

// console.log(student.name, student.id);

// console.log(arr[2]);

// console.log(typeof arr[1]);

// let newArr = arr.map((item) => {
//   console.log(item);
//   return item + " new";
// });

// console.log(newArr);

// let a = [1, 2, 3, 4];

// let b = [...a];

// console.log(b);

// a.push(5);

// console.log(b);

// let m = "Hello";

// let t = m;

// m = "test";

// console.log(t);

// function restTest(...a) {
//   console.log([...a]);
// }

// restTest(10, 20);

let test = {
    id: "Hello",
    name: "Jello",
    age: "trello",
  };
  
  let { name, age } = test;
  
  console.log(test);
  console.log(name);
  console.log(age);