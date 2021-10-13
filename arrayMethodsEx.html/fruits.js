const fruits = ['Apple','Orange','Kiwi','Grapes']
const fruitsGreater =fruits.filter(val=>val.length>5)
console.log(`fruitsGreater - ${fruitsGreater}`);


console.log('--------------------');
const fruitsToUpper =  fruits.map(val=>val.toUpperCase())
console.log(`fruitsToUpper -${fruitsToUpper}`);
console.log('------------------------');
const fruitsIncludE =fruits.filter(val=> val.includes('e'))

console.log(`friutsIncludesE - ${fruitsIncludE }`);



console.log('-----------------');
const items = [{
 id:1,
 name:'Lip stick',
price:600
},{
    id:2,
    name :'Bangles',
    price:1000
},{
    id:3,
    name:'Trimmer',
    price:2300
},{
    id:4,
    name:'Bread oil',
    price:1000
}
];
console.log('----------------');
const priceGreaterThanEh =items.filter(val=>val.price>800)
    console.log("itemes Greater than 800 are",priceGreaterThanEh );
    console.log('--------------------------');

const lengthGreater = items.filter(val=>val.name.length>8)
console.log("Length greater than 8" ,lengthGreater );
console.log('-------1----');
const  addToPrice = items.map(val=>{
    /*val.price += 100
    return val*/
const valCopy = Object.assign({},val)       //deep copy
valCopy.price +=100
return valCopy

})
console.log("Adding 100 to all elements",addToPrice );
console.log('--------------');
const upperCaseItems = items.map(val=>{
    val.name = val.name.toUpperCase()
    return val
})
console.log(" changing all toUppercase ",upperCaseItems);
console.log('-----------------');
console.log(items);
console.log('------------------------');
const person ={
    name:'Ajay',
    age:30,
    hobbies:['Cricket','Kabaddi'],
    address:{
        city :'Bangalore',
        pincode:560062
    }
}
const p = Object.assign({},person)
person.address.city ='Hyderabad'
console.log(person.address.city); //Hyderabad
console.log(p.address.city);   //Hyderabad
console.log('-------------------');                   //Shalow copy
person.name = 'Abhi'
console.log(person.name); //Abhi
console.log(p.name); //Ajay







































