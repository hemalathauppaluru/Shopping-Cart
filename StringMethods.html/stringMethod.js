//strings are immutable 
//toUppercase
console.log('-----touppercase---');
let str ='hello'
str = str.toUpperCase()
console.log(`str - ${str}`);

//toLowerCase method
console.log('-----tolower case---');

str =str.toLowerCase()
console.log(`str - ${str}`);

//CharAt method
console.log('----------charAt---');
const searchedChacter = str.charAt(1)
console.log(`searchedChacter - ${searchedChacter}`);

//indexOf method
console.log('------------indexof --------');
const indexOfE  = str.indexOf('e')
console.log(`indexOfE - ${indexOfE}`);

//concat method
console.log('-----concat---');
const greet = str.concat(',Good Morning ','Hema ','Hello ')
console.log(`greet - ${greet}`);

//includes method
console.log('--------includes------');
const includesO = str.includes('o')
console.log(`includesO -${includesO}`);

//replace method
console.log('-----replace----');
const replaceh  =str.replace('h',"H")
console.log(`Replace - ${replaceh}`);

//replaceAll method
const replaceAlls = str.replaceAll('l','o')
console.log(`replaceAlls - ${replaceAlls}`);
//substr method
const extractedString = str.substr(1,3)
console.log(`extractedstring - ${extractedString }`);
//substring method
const extractedString1 = str.substring(1,3)
console.log(`extractedString1 - ${extractedString1 } `);
//trim method 
const note ='  Hello , Welcome TY'
const noteAfterTrim = note.trim()
console.log(`noteAfterTrim  - ${noteAfterTrim }`);
//trimleft
const noteAfterTrimLeft = note.trimLeft()
console.log(`noteAfterTrimLeft - ${noteAfterTrimLeft } `); 
//trimRight
const noteAfterTrimRight =note.trimRight()
console.log(`noteAfterTrimRight - ${noteAfterTrimRight } `); 

//Split 
const data ='hello'
const dataAfterSplit = data.split('')
console.log(`dataAfterSplit  - ${dataAfterSplit }`);
//example -reverse a string
const revesedString = data.split('').reverse().join('')
console.log(`revesedString - ${revesedString}`);












