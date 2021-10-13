const person={
    name:'Hema',
    age:22

}

const personCopy ={...person}
console.log(personCopy);
console.log('----------------------');
const numbers=[10,20,30]
const numbersCopy  =[...numbers]
console.log('------------------------------------------');

const person1 ={
    age :40,
    pName:'Guru'
}
const address={
    city:'Banglore',
    pincode:560062
}
const personAddress ={...person,...address}
console.log(personAddress );

console.log('-------------');
const person2={
    age:50,
    color:'White',
    languages:['Kannada','English']
}
//to get age from person1
const {age,color} ={...person1,...person2}
console.log(age);
console.log(color);


