console.log('=========third======');
function first (test){
    setTimeout(function(){
        console.log('first func');
        test()

    },1000)
}

function second(){
    console.log('second func');
}
first(second)