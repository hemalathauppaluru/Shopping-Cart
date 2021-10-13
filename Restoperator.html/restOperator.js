function addNumbers(...nums){
    let sum=0
    for(let i=0;i<nums.length;i++){
    sum += nums[i]
}
console.log(`sum -${sum}`);
}
addNumbers(10,30,20)
addNumbers(10,30,20,70)
addNumbers(10)
addNumbers(10,30,20,80,90)

//Defult parameter
function greet(name='hema'){
console.log(`Welcome ${name}`);
}


greet('Ajay')


