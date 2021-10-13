var x =10;           //global scope
console.log(x);

function test(){
    var x=20;                //local scope
    console.log(x);
}
for(var i=0;i<5;i++){
    console.log(i);
}
console.log('-----------');
console.log(i);
//reassginment
var z = 5;
z=10
console.log(z);

//Redeclaration
var y=20;
var y=30;
console.log(y);


/*problems with var keyword
1.Hoisting (i.e.,can access variables before declaring)
2.block scope is not supported
3.Redeclaration is allowed
4.Reassigning is allowed

To overcome above problems let and const keyword was
introduced in ES6.
*/
//Let keyword

let a=10
console.log(`Global access`,a);
console.log('--------------------');

function accessLetVariables (){
    console.log(`Inside function`,a);
}
accessLetVariables();

console.log('-------Block scope---');
for(let j=0;j<3;j++){
    console.log(j);
}
//console.log(j); j is not defined because j is block Scope
//console.log(b);
//let b=10;   cannot access 'b' before initialization at scope.js:50
let c=20
//let c=60   Uncaught SyntaxError: Identifier 'c' has already been declared
console.log('----------');

let d=100
console.log(d);
d= 10
console.log(d);
//const keyword

//console.log(p); Uncaught ReferenceError: Cannot access 'p' before initialization
const p=30

console.log(p);

console.log('-----------------');

/*for(let k=0;k<3;k++){
    console.log(k);
}
Uncaught TypeError: Assignment to constant variable.
i.e, k=0
     k=1
     k=3

//if (10>6){}
console.log(k);*/


if (10>6){
    const name ='Hema';
    console.log(`Name - ${name}`);
}

function constFunctionScope (){
    const r =90
    console.log(r);
}

constFunctionScope()

//console.log(r);  Uncaught ReferenceError: r is not defined(r
//is defined inside function so only be accessed inside function)

const n =490;
//const n=670;Uncaught SyntaxError: Identifier 'n' has already been declared

const m=890
//m =880Uncaught TypeError: Assignment to constant variable.

const fruits = ['Apple','Mango','Banana','Grapes','Dragon']
/*fruits = ['Apple','Mango','Banana','Grapes','Dragon'] or friuts = [kiwi]
This is not supported as we are using assignment operator and trying to reassign value  */

fruits.push('KIWI')   //This is supported    --->this is in built method
console.log(fruits);







