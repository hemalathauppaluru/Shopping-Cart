const person = {
    name1:'Abhi',
    age:22,
    color:'white'
    

}
const {name1,age}=person
console.log('name1 -', name1);
console.log(`age - ${age}`);
console.log('----------------Array Destruvturing---------------');
const hobbies =['Dancing','Rampwalk','Travelling','Swimming']
const [hobby1, hobby2, ,hobby3] =hobbies
console.log(`hobby1 - ${hobby1}`);
console.log(`hobb2 - ${hobby2}`);
console.log(`hobby3 - ${hobby3}`);
console.log('---------------for accessing ayyay objects-----------------------');
2
const personData = {
    Name:'Abhi',
    age:22,
    color:'white',
    address:{
        City:'Banglore',
        pincode:560062
    },
    hobbies:['Reading','Googling','Numismatics']
    

}
const {city,pincode} = personData.address
console.log(city);
console.log(pincode);
const {hobbies :[hoby1,hoby2]} =personData
console.log('-----------------------------------');

const personData1 = {
    pName:'Anu',
    age:22,
    color:'white',
    pAddress:{
        pCity:'Banglore',
        pPincode:560062
    },
    hobbies:['Reading','Googling','Numismatics']
    

}
const {pName, pAddress:{pCity,pPincode}} = personData1
console.log('person details - ',personData1 );