const str= "My name is "
const str1=str.split(" ")
console.log(str1);
console.log('-------------------');
let chars =[1,2,3,2,3,4,2,1]
let uniChars =[...new Set(chars)]
console.log(uniChars);



const name = 'HEMA'
const age =12;
const x=null;
console.log(typeof name);
console.log(typeof x);
const y=undefined
console.log(typeof y);
console.log('-----object creation---');
const person ={
    name:'Latha',
    lastName:'U',
    age:22,
    fullName:function (){
        return this.name +" "+ this.lastName
    }
}
console.log(person.name);
console.log(person["lastName"])
 
console.log(person.fullName());
console.log('-----object using new------ ');

const car = new Object()
car.name="BMW"
car.price =120000
car.color="red"

car.getFullDetails= function(){
    return this.name +" "+this.color
}
console.log(car.getFullDetails());

console.log('-----Strict Equals');
const data="12"
if(data===12){
    console.log(true);
}else{
    console.log(false);
}
const years=18
years>18? console.log('Eligible voting'): console.log('not eligible');
const friuts =["Apple","Banana",undefined,null]
friuts[0]='Grapes'

 
console.log(friuts[3]);
console.log(friuts[1]);
for(let i=0;i<friuts.length;i++){
    console.log("Friuts At " + i +  friuts[i]);
}
for(let i=friuts.length-1;i>=0;i--){
    console.log(friuts[i]);
}

console.log('-------Array 2----');
const bike= new Array(
    "FZ",
    "Passion",
    1
);
for(let i=0;i<bike.length;i++){
    console.log(bike[i]);
    if(bike[i].length>2){
        console.log(bike[i]);
    }
}
let array=[
    {
        name:'lilly',
        color:"White",
        price:120

    },
    {
        name:'Louts',
        color:"pink",
        price:100
    },{
        name:"Jasmine",
        color:"White",
        price:150

    }
]
//array.length=0
//array = []
console.log('-----3--');
for(let i=0;i<array.length;i++){
    if(array[i].price>100){
        console.log(array[i]);
    }
}
console.log('====4');
for(let i=0;i<array.length;i++){
    if(array[i].name.length>5)
    console.log(array[i]);
}



const todaysDate= new Date()
console.log(todaysDate);
const futureDate =new Date(1998 ,05,30 )
console.log(futureDate);
const tomorowDate =new Date(86400000)
console.log(tomorowDate);

console.log(`Full year= ${todaysDate.getFullYear()}`);
console.log(`Full month = ${todaysDate.getMonth()}`);
console.log(`Full Date  = ${tomorowDate.getDay()}`);

const months = ['Januvary','February','March', 'April','May','June','July','Agust','September', 'October','November','December']
const formatDate= new Date('jun 30 1998')
const month= formatDate.getMonth()
console.log(`${months[month]} ${month} ${formatDate.getMonth()} ,${formatDate.getFullYear()}`);




console.log('-----------Math Methods----');
console.log(Math.min(20,10,50));
console.log(Math.sqrt(2,4));

console.log (Math.round(Math.random()*100));
console.log(Math.pow(2,3));


var maxToMin  =(min,max)=>{
    return Math.ceil(Math.random()*(max-min))+min
}
console.log(maxToMin(20,50));
console.log('----1---');
console.log(Math.PI*2);
var randomNum = (min,max) => {
    
    return Math.floor(Math.random()*(max-min)) + min
}
console.log(randomNum(1,70));
console.log('-------1-----');

const fruits =['Apple','Banana','orange']

const allFruits =''
for(let fruit of fruits)
{ //allFruits +=fruits.join('-')
    console.log( allFruits);
    console.log(fruit);
}
for(let key in fruits){
    console.log(fruits[key]);
}

console.log('-----callback---');
function first1(callback){
console.log("First function");
console.log('third');
callback()
}
function second(){
    console.log('second');
} 
first1(second)

 let a=10;
 console.log(a);
 a=50              //re assginment//no redeclaration
 console.log(a);
 const b=2
                  //no ressginment,no redeclaration
 console.log(b);


 let name2 ='hema'
 let name1 =name2
 console.log(name);
 console.log(name1);
 name1='rav'
 console.log(name2);
 console.log(name1);

let car1={
    name:"Bmw",
    clor:"red"
}
let newCar =car1
console.log(car1.name);
console.log(newCar.name);
newCar.name="Fz"
console.log(car1.name);
console.log(newCar.name);


let bike1={
    name:"Dsicover",
    color:"Black"
}
let newBike=Object.assign({},bike1)
console.log(bike1.name);
console.log(newBike);
newBike.name="fz"
console.log(bike1.name);
console.log(newBike.name);





const h1=[100,200,300,400]
const addingTenToh1 = h1.map(function(val,index){
    val =val+10
    return val
})
console.log(addingTenToh1);

const addingTenToh1arr =h1.map(val=>val+100)
console.log(addingTenToh1arr);

const filter =h1.filter(val=>val>100)
console.log(filter);
const  h2=[[1,2,3],[1,3,5]]
const flat =h2.flat()
console.log(flat);
console.log('----new----');
const a1=["fruits","flowers","Cras","bikes"]
console.log(a1[1]);
for(let i=0;i<a1.length;i++){
    
    if(a1[i].length>5){
        
        console.log(a1[i]);
    }
}

const a2=new Array(
    1,"hema","latha","niru",22,100,200,400
)
for(let i=0;i<a2.length;i++){

    console.log(a2[i]);
    console.log();

}

const person1=[
    {
        name:"hema",
        age:22,
        color:"white"
    },{
        name:"Latha",
        age:23,
        color:"black"
    }
]
for(let i=person1.length;i>=0;i--){
    console.log(person1[i]);   
}
const bike2=new Object()
bike2.name="BMW"
bike2.color="red"
console.log(bike2.name);
console.log(bike2.color);
console.log(typeof bike2);

const todays1=new Date()
console.log(todays1);


const featurDate=new Date(1998, 06,30 )
console.log(featurDate);
console.log(featurDate.getMonth());
console.log(featurDate.getUTCFullYear());
const months1=["jan","feb","mar","april","may","june","july","agust","sep","oct","nov","dec"]
const month1=featurDate.getMonth()
console.log(months1[month1] );


console.log("---math Objects--");
const data1=[10,20,30,40,50]
console.log(Math.ceil(Math.random()*100));
console.log(Math.ceil(1.20));
const min=10
const max=50
//console.log(Math.ciel(Math.random()*100));

console.log('------call back---');
function first(callback){
    console.log("Hello World");
return callback()
}
function second(){
    console.log("Hello Hi");
    
} 
first(second)
console.log('----inner function---');
function outer(){
    console.log("Iam outer");
    return function inner(){
        console.log("Iam inner");
        return function innerFunc(){
            console.log("Inner Function");
        }
    }

}
outer()()()
function factorial(n){
    if(n==0 || n==1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}
factorial(5)
console.log(factorial(5));
function fact(num){
    if(num==0 || num==1)
    return1
    for(let i=num-1;i>=1;i--){
        num*=i
    
    }
    return num
}fact(6)
console.log(fact(6));
console.log('-------h1---');
const elementH1=document.getElementsByTagName('h1')

console.log(elementH1);
const para=document.querySelectorAll('.para')
console.log(para);