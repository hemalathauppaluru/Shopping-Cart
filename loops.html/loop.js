console.log("----for of loop arrays-----");
var fruits =['Apple','Banana','Orange']
var allFruits = ''
for ( var fruit of fruits){
    allFruits= fruits.join('-')
    console.log(allFruits); 
    //console.log(`Fruit- ${fruit}`);
    //allFruits +=fruit + '-'
   
}

console.log(`Fruit- ${fruits}`);
console.log('All Friuts ' + allFruits);

console.log('----for only one value---');
fruits[0]

console.log('---------=for in loop for obj===-----');
 var person = {
     name : 'Abhi',
     age :22
 }
 for ( var key in person ){
     console.log(person[key]);
     console.log(`${key} - ${person[key]}`);
     console.log(person.name);
 }

 console.log('-----=for in loop for array=--');
 
 var carBrands = ['BMW' ,'Audi','Ferrari']
 for (var index in carBrands){
     console.log(carBrands[index]);
 }

console.log('--------using for loop------');
var numbers = [10,20,30,,,,,40,'','']
for (var i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
console.log('-----------usi---------');
for (var index in numbers){
    console.log(numbers[index]);
}
console.log('-------------');
var book = {
    title : "Web Fundamentals",
    price : 1200,
}

var books = ['Web Fundamentals','Java','Javascript']
 books[0] = 'Pyton'
 books['element'] = '.Net'
 for (var i=0;i<books.length;i++){
     console.log(books[i]);
 }
 console.log('------------');
 for (var index in books){
     console.log(books[index]);
 }