console.log('JS Sstarted');
async function fetchPosts(){
    const response =await fetch(` https://jsonplaceholder.typicode.com/posts`)
    console.log(response);
    const data = await response.json()
    console.log('data', data);
    console.log('hello');
}
fetchPosts()
console.log('JS ended');

 

