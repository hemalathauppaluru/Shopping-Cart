//Using window object
var str ='Hello'
console.log('str -',str);
console.log('window - ',window.str);
console.log('-------------------------');
function getName(){
    return 'Chandan'
}
window.console.log('getName - ',getName());
console.log('window get name -',window.getName());
console.log('---------------------');
window.console.log(window);
window.console.log('-------------');
window.console.log(window);
console.log('Inner height', window.innerHeight);

console.log('Inner width', window.innerWidth);

//alert method
//window.alert('Good Morning')

//confirm method
/*const isEligible = window.confirm('Is your age grater than 18 ?')
console.log(`isEligible - ${isEligible}`);
if(isEligible){
    console.log('Eligible for voting');
} else{
    console.log('not eligible for voting');
}
*/

console.log('--------------------------');
//prompt method
/*const age =window.prompt('Please enter your Age', 22)    //for defult value give second parameter as 22
console.log(`Age - ${age}`);
if(age>=18){
    //console.log('Eligible for Voting');
    window.open('http://WWW.flipkart.com')
} else {
    window.open('http://WWW.firstcry.com')
   // console.log('Not eligible for voting ');
}*/
console.log('-----------------------------');
console.log('Location ',location);
console.log('Navigator ', navigator);
console.log('History ', history);


navigator.geolocation.getCurrentPosition(loc=>{
    console.log('Location', loc);
})
