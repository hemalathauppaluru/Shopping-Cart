//forEach method
const numbers = [10,"hema",30,40]
numbers.forEach(function(value, index)
{
    console.log(`Value at index ${index} - ${value}`);
})
console.log('----------------');
numbers.forEach((value, index ) =>{
    console.log(`Value at index ${index} - ${value}`);
})


console.log('------------');
numbers.forEach((value, index) => console.log(`Value at index ${index} - ${value}`))
console.log('--------------');

const animals = ['Tiger','Lion','Elephant','Cat']
animals.forEach((value, index)=> console.log(`value at index ${index} - ${value}`))
const books = [{
    title : 'Java',
    price : 1500,
},
{
    title :'Python',
    price : 1000
},
{

    title :'React',
    price : 12000
},
]
books.forEach((value, index) => {
//console.log(`Value at index ${index} - ${value}`);
console.log(value);
})
console.log('-----------------------------');
books.forEach(value =>{
    if(value.price > 1000){
        console.log(value);
    }
})

//isArray method
const number=[10,20,30]
const isNumberArray = Array.isArray(number)
console.log(`Numbers is Array ${isNumberArray}`);
console.log('----------');
const person = {
    name : 'Hemalatha',

}
const isPersonArray = Array.isArray(person)
console.log(`person is array -${isPersonArray}`);

//Push method
const newLength = numbers.push(10,20,30)
console.log(`new length after push - ${newLength}`);
console.log(`numbers Data - ${numbers}`);

const typeOffForEach = numbers.forEach((value) =>{
    console.log(`value - ${value}`);
}
)
console.log(`Return type of forEach method - ${typeOffForEach}`);


//pop Method
const removedElement = numbers.pop()
console.log(`Removed element - ${removedElement}`);
console.log(`numbers data after pop-${numbers}`);
  console.log('---------1---------');
  //includes method

const hasThirty = numbers.includes(30)
console.log(`Has thirty - ${hasThirty}`);

const hasElement = numbers.includes(5000)
console.log(`Has element - ${hasElement}`);

const hasTwenty = numbers.includes(20,3);
console.log(`Has twenty - ${hasTwenty}`);


//splice method 
const n= [40,50,60,100]
console.log(`n before splice - ${n}`);
const deletedElements = n.splice(0,1,100)
console.log(`n after splice - ${n} `);
console.log(`deletedElements - ${deletedElements}`);

console.log('-----------2----------');
const n1 =[20,40,50,60]
console.log(`n1 before splice - ${n1}`);
const removedElements = n1.splice(2,2,70,100)
console.log(`n1 after splice - ${n1}`);
console.log(`removedElements - ${removedElements}`);

console.log('--------------------');

//slice method
const n2 =[10,20,30]
console.log(`n2 before slice - ${n2}`);
const elements = n2.slice(1,2)
console.log(`n2 after slice - ${n2}`);
console.log(`elements - ${elements}`);

// unshift
const m1 =[77,66,88,01]
const newLengths = m1.unshift(10,20,30)
console.log(`new length after unshift - ${newLengths}`);
console.log(`numbers Data - ${m1}`);

//shift
const number2 =[55,70,58,89,90]
const removedElement1 = number2.shift()
console.log(`Removed element - ${removedElement1}`);
console.log(`numbers data after shift-${number2}`);
  console.log('------------------');
console.log('--------------');
const z =[10,20,30]

//Indexof method
//if (z.indexOf(30) >=0)   ---->it is alaso same output for below one
if (z.indexOf(30) !== -1){
    console.log("prsent");
}
else {
    console.log(" Not prsent");
}
console.log('----------------------');
//join  method 
const numbs = [22,80,90]
const numbsWithHifen = numbs.join('-')
console.log(`numbsWithHifen - ${numbsWithHifen}`);

//map method
const nums =[100,200,300]
const numsAfterAddingTen  = nums.map(function(val,index){
    val =val+10
    return val
})
console.log(`numsAfterAddingTen - ${numsAfterAddingTen}`);
console.log('------------------');
const numsAfterAddingTenUsingArrow = nums.map((val,index)=>{
    return val+10
}
)
console.log(`numsAfterAddingTenUsingArrow - ${numsAfterAddingTenUsingArrow}`);
console.log('--------------------');
const numsAfterAddingTenUsingArrowSingleline = nums.map(val => val+10)
console.log(`numsAfterAddingTenUsingArrowSingleline - ${numsAfterAddingTenUsingArrowSingleline}`);
console.log('----------------');
//Filter Method
console.log('------filter method-----');
const numbersData = [100,200,300]
const filteredNumbers = numbersData.filter(function(val, index){
    if(val>150){
        return true
    } else {
        return false
    }
})
console.log(`filteredNumbers - ${filteredNumbers}`);
console.log('----------filter method using arrow------------');
const filteredNumbersUsingArrow = numbersData.filter((val,index)=>{
    return val>150
})
console.log(`filteredNumbersUsingArrow - ${filteredNumbersUsingArrow}`);
console.log('------------filter method using arrow line---------');
const filteredNumbersUsingArrowSingleLine = numbersData.filter(val=>val>150)
console.log(`filteredNumbersUsingArrowSingleLine - ${filteredNumbersUsingArrowSingleLine }`);
console.log('----------------------------------------');

    










