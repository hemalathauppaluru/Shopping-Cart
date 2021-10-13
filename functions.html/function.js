//1.Named Functions

function add(n1, n2){
    var sum =n1+n2
    return sum
}
var result = add(10,20)
console.log(`Result - ${result}`);

// 2.   Anonymous function

var substract = function (n1,n2) {
    return n1-n2
}
var res = substract(20,10)
console.log(`Res- ${res}`); //---->here must and should end with semicolon because below one is self invoked function.Otherwise its show error

 // 3. IIFE Function(Imediate invoke function Expression)

 (function(n1,n2){
     var product = n1*n2
     console.log(`Product - ${product}`);
 })(10,20);

 //4.Arrow functions
 //single line -return statement will be added by js engine

 var divide = (n1,n2)=>n1/n2
 var d = divide(10,20)
 console.log(`value - ${d}`);

 //single parameter -paranthasis is optional
 var greet = name =>{
return `Welcome to the team , ${name}`
 }
 console.log(greet(`Hema`));
 // No parameter- paranthasis is mandotary
 var printTenNumbers = () =>{
     for(var i =0;i<10;i++){
         console.log(i);
     }
    }
 
printTenNumbers()
var greeting = name =>`Welcome to the team , ${name}`
    console.log(greeting(`MAHI`));
    console.log('------function witin a function------ ');
    function  findSquareOfTwoNumbers (n1,n2){
        return function(){
            console.log(`Square Of two numbers - ${n1*n2} `);
        }
    }
     
    var squareFunction = findSquareOfTwoNumbers(10 ,10)
    console.log('squareFunction -' + squareFunction );
    squareFunction()
    console.log('---------------------');
    // curring
    findSquareOfTwoNumbers(20)(10)

    console.log('--------CALL BACK FUNCTION----------');
//Callback Function:-passing a function as argument in another function is known as callback function

    function test (callbackfunc){
        console.log('Test Function');
        callbackfunc()
    }

    function sample(){
        console.log('Sample Function');
    }
    test(sample)
    console.log('-----------');

   

