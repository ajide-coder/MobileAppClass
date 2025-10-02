//This is Javascript class
// let
let book = "olamide";

console.log(book);

book = "pen";
console.log(book);

let chalk = "victor";
console.log(chalk);
let age = 30;
console.log(age);
let me = true;
console.log(true);

// name.push('shade')
// console.log(name)
// name.pop()
// console.log(name)
// name.unshift("david")
// console.log(name)
// name.shift()
// console.log(name)
let name = ["ade", "olamide", "shayo", "tobi"];
name.splice(0, 2);
console.log(name);

let people1 = [2, "tope", 30, "ola"];
people1.push("dora");
console.log(people1);
people1.pop();
console.log(people1);
let people2 = [2, "tope", 30, "ola"];
people2.splice(1, 2);
console.log(people2);
let people3 = [2, "tope", 30, "ola"];
people3.splice(0, 2);
console.log(people3);
let people4 = [2, "tope", 30, "ola"];
people4.unshift("tina");
console.log(people4);
people4.shift("tina");
console.log(people4);
let people5 = ["enoch"];
people5.push("tobi");
console.log(people5);

let basket = [
    { fruit: "apple",
        bread:'danjuma'
    },
     { vegetable: "ewedu",
        water:"mr V"
      }];   
console.log(basket.length);   

const namet ="enoch"
console.log(namet.length)

let passcode =[""];
passcode.push("0,1,2,3,4")
console.log(passcode)


let named =[
    {
id:1,
namedd:"enich"
},

{
id:2,
namef:"olu"
},

]

console.log(named)
named.push('1')
console.log(named)

function myFunction(p1, p2) {
  return p1 * p2;
}

console.log(myFunction(4,4));
