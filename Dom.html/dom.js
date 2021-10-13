 const element = document.getElementById("test")
 console.log("element", element);
 console.log(element.innerText);
 console.log(element.innerHTML);
 console.log(element.textContent);
 element.innerText = "Good afternoon"

  //element.innerText =' <button>Good Afternoon</button>'
 element.innerHTML ='<button> Good evening</button>'
//document.write('Welcome to js class')

const pElement = document.createElement('p')
//console.log('pElement ', pElement);
pElement.textContent = 'Monday mock'
//console.log('pElement', pElement);
//document.body.appendChild()
console.log('---------------------');

//console.log('pElement ', pElement);
element.insertAdjacentHTML('afterend' , '<p>Monday strict mock</P>')
console.log('--------------------');
const h1Element = document.getElementsByTagName('h1')
console.log('h1Elements ',h1Element);

const demoClassElements = document.getElementsByClassName('demo')
console.log('demoClassElements ' ,demoClassElements);

const h1Elements = document.querySelector('h1')
console.log('h1Elements ',h1Elements);
const pElements = document.querySelectorAll('p')
console.log('pElements',pElements);

//element.style.color = 'lightblue'
element.style.background ='green'
element.style.width ='120px'
element.style.textAlign = 'center' 
//const ranndomTextElement = document.querySelectorAll('ranText')
//randomTextElement.calssName ='ranStyle'
 //randomTextElement.calssList = 'ranStyle ranstyle1'
for(style in demoClass){
    demoClass[style].style.color='black'
    demoClass[style].style.border='1px solid blue'
}
console.log('---------------------'); 
for (let i=0;i<demoClassElements.length;i++){
    demoClassElements[i].style.clor ='blue'
}










