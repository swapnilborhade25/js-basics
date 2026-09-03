
async function todos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const data =await response.json;
    console.log(data);

    console.log(response.status);
    console.log(response.url);
}

todos();