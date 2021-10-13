var home = ['mom','dad','aunt',"grand ma",'brother',"sister"]
for(var i=0;i<home.length;i++){
    console.log(`Home Members ${i}-${home[i]}`)
}
var cars = [
    {
name :"BMW",
color :"Red",
price :2500000
    },
    {
        name :"Audi",
        color : "Black",
        price :400000
    },
    {
        name :"Ben",
        color :"White",
        price :700000
    }
]

for (var i=0;i<cars.length;i++){
    if(cars[i].price>200000){
        console.log(cars[i]);
    }
    if(cars[i].name.length>3){
        console.log(cars[i]);
    }
    if(cars[i].color.length>3){
        console.log(cars[i]);
    }
}
var bikes = new Array(
    "FZ",
    "DISCOVER",
    "Passion ");
    for (var i=0;i<bikes.length;i++){
        console.log(bikes[i]);
        if(bikes[i].length>3){
            console.log(bikes[i]);
        }
    }
    console.log('------Date Methods----------');
   var todaysDate =new Date()
   console.log(`Today Date ${todaysDate}`);
   var futureDate = new Date('30 jun 1998')
   console.log(`futureDate ${futureDate}`);
   var futur =new Date(86400000)
   console.log(`Futur ${futur}`);
   console.log(`Todays Fullyear ${todaysDate.getFullYear()}`);
   console.log(`full Month ${futureDate.getMonth()}`);
   console.log(`full DAY ${futur.getDate()}`);
   console.log('----printing full--- ');
   
var months = ['Januvary','February','March', 'April','May','June','July','Agust','September', 'October','November','December']
 var formatDate = new Date('10 dec,2022')
 var month = formatDate.getMonth()

 console.log(`${months[month]} ${formatDate.getDay()} ${formatDate.getDate()}, ${formatDate.getFullYear()}`);
 var days = ['Sunday','Monday','Tuseday','Wednsday','Thursday','Friday','Saturday']
 var formatDay = new Date('30 jun 1998')
 var day = formatDay.getDay()
 console.log(`${days[day]} ${months[month]} ${formatDay.getDay()} ${formatDay.getFullYear()} ${formatDay.getMonth()}`);
console.log('-----Math Methods----');
console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));
console.log(Math.abs(-9));
console.log(Math.round(1.8));
console.log(Math.min(19,1,6,));
console.log(Math.max(3,9,18,26,78));
console.log(Math.random(1));
console.log(Math.ceil(Math.random()*100));
console.log('----FOR OF LOOPS---------');
var bags = ['Bag1','Bag2','Bag3','Bag4']
for(var bag of bags  ){
    console.log(bag);
}

for(var bag in bags){
    console.log(bags[bag]);
}
var fruits =  {
        name:'Apple',
        rs:120
    }

for(var key in fruits){
    console.log(fruits[key]);
}
console.log('----Bags for in---');

for(var bag in bags){
    console.log(`Bags ${bags[bag]}`);
}

console.log('----Functions----');
function add(n1,n2){
    return n1+n2
}
var res =add(10,20)
console.log(`Result - ${res}`);
var sub=function (n1,n2){
    return n1-n2
}
var result = sub(20,10)
console.log(`Result - ${result}`);
/*(function(n1,n2){
    var multi =n1*n2
    console.log(`Multi -${multi}`);
})  (10)(10)*/
(function(n1,n2){
    var product = n1-n2
    console.log(`Product - ${product}`);
})(10,20);
var divide =(n1,n2) =>(n1/n2)
    var div =divide(100,10)
    console.log(`Divide - ${div}`);
var greet = name => hema
console.log(`Welcome to ${greet}`);

var print = () => {
    for (var i=0;i<9;i++){
    console.log(` Print - ${i}`)
}
}



function test(callback){
    console.log('hi hello');
    return callback()
}
function sample (){
    console.log('hello world');
} test(sample)
console.log('---FUnction Within A function---');
function hema(latha){
    console.log('HEMA');
    return function latha(){
        console.log("Hello WORLD");
    }
} hema()()  //---------------->currying



const element1=document.getElementById("test")
console.log(element1);
console.log(element1.innerHTML);
console.log(element1.innerText);
console.log(element1.textContent);
