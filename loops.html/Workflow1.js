console.log('========second=======');
function first (){
    setTimeout(function(){
        console.log('First func');
    },1000)
    
    console.log('Test your brain');
}

function secon(){
    console.log('Second func');
}
function third(){
    setTimeout(function(){
        console.log('Third func');
    },0)
}
first()
second()
third()