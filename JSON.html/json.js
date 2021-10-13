const person={
    name:'Ajay',
    age:13,
    color:'black'
}
//can use this for deep copy
const strinigFiedPerson = JSON.stringify(person)
console.log('After conversion from JS to JSON',strinigFiedPerson);
console.log('-----------------------------');
const jsPersonToJson = JSON.parse(strinigFiedPerson)
console.log('After conversion of JSON to JS',jsPersonToJson );





console.log('--------------------');
const car={
    name:"BMW",
    clor:"red",
    price:120000
}
const convertJsToJson=JSON.stringify(car)
console.log(convertJsToJson);
const convert=JSON.parse(convertJsToJson)
console.log(convert);

console.log('-----------------');
const bike={
    name:"FZ",
    color:"Green",
    price:200000
}
const newBike=JSON.parse(JSON.stringify(bike))
console.log(newBike);
newBike.name="Passion pro"
console.log(newBike)
console.log(bike);
const array1=["hema"]
const array=array1.reverse(array1)
console.log(array);