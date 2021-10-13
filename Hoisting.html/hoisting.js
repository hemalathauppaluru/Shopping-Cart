
console.log(x);
var x = 10;
//function hoist () {
  //  console.log(y);
    //var y =20
//}
//hoist()
console.log('-------------------');


var a = 10;
function test(){
    console.log(a);
    var a =40
}
test()

console.log('-------------------');
//Uncaught TypeError : getId is not a function
//Access Anonymous functions after declaring and defining
//getId()

var  getId = function(){
    console.log('12');
}
console.log('-------------');
//uncaught typeerror: whis is not a funaction
// Anonymous functions after declaring and defining
//getWish()
var getWish = function(){
    console.log("whishing you ganesh chaturty");
}

console.log('----------');
var y;
console.log(y);
 y=10;

 function hema(){
     var a=10
     console.log(a);
    

 } hema()
 console.log('---------');
 var b=10
 function test(){
     console.log(b);
     var b=40;
 } test()
console.log('-----log---');
c=10;
console.log(c);
var c;