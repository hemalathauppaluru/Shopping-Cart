// primitive types are immutable

let name1='Ajay'
let nameCopy = name1

console.log(`name - ${name1}`);//prints Ajay
console.log(`nameCopy - ${nameCopy}`);//prints Ajay


/* When  we change the data of name1 variable it will not change  the data of nameCopy variables*/


name1 = 'girish'
console.log(`name1 - ${name1}`); //girish
console.log(`nameCopy - ${nameCopy}`);//prints Ajay

//reference type of mutable
//example for mutable
const person = {
    name :'Ajay',
    age :28,
}

const personCopy = person
console.log(`person name -${person.name}`);  //prints vijay
console.log(personCopy.name);  //prints vijay


/*When we change the data of person object variable it will  affect the personcopy variable because in memory
 both person and personcopy variables are pointing to same object*/

person.name = 'Abhi'
console.log(`name - ${person.name}`);  //prints Abhi
console.log(`nameCopy  ${personCopy.name}`);//prints Abhi  

  //Make object   behave like immutable
const car ={
    model :2021,
    brand : "BMW"
}

const carCopy = Object.assign({},car)
console.log('------1------');
console.log(car.model);
console.log(carCopy.model);
console.log('---------2---------');
carCopy.model = 2022
console.log(car.model);
console.log(carCopy.model);
  //Example for Array mutable
  let n=[10,20,30]
  let n1 = n
  n =[50]
  console.log(`n -${n}`);
  console.log(`n1 - ${n1}`);

  //Eample for Array Immutable
  let numbers = [100,200,300,400,500]
  let numbersCopy = numbers.slice(1)
  console.log(`numbers - ${numbers}`);
  console.log(`numbersCopy - ${numbersCopy}`);




const bike={
  name:"FZ",
  color:"black",
  price:200000
}
const bike1=bike
console.log(bike);
console.log(bike1);
bike.name="PassionPro"
console.log(bike);
console.log(bike1);






